/* main.js — rendert het verhaal uit js/content.js. Je hoeft hier niets aan te passen. */
(function () {
  "use strict";

  var STORY = window.STORY;
  if (!STORY) {
    console.error("content.js niet geladen: window.STORY ontbreekt.");
    return;
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function isPlaceholder(text) {
    return typeof text === "string" && text.trim().indexOf("[SCHRIJF HIER") === 0;
  }

  function addProse(container, paragraphs) {
    (paragraphs || []).forEach(function (p) {
      var para = el("p", "prose" + (isPlaceholder(p) ? " is-placeholder" : ""), p);
      container.appendChild(para);
    });
  }

  function addFacts(container, facts) {
    if (!facts || !facts.length) return;
    var grid = el("ul", "facts");
    facts.forEach(function (f) {
      var li = el("li", "fact");
      li.appendChild(el("span", "fact__pip", "♦"));
      li.appendChild(el("span", "fact__value", f.value));
      li.appendChild(el("span", "fact__label", f.label));
      grid.appendChild(li);
    });
    container.appendChild(grid);
  }

  /* ── Hero ───────────────────────────────────────────── */
  var site = STORY.site || {};
  document.getElementById("hero-period").textContent = site.period || "";
  document.getElementById("hero-title").textContent = site.title || "";
  document.getElementById("hero-subtitle").textContent = site.subtitle || "";
  var heroIntro = document.getElementById("hero-intro");
  heroIntro.textContent = site.intro || "";
  if (isPlaceholder(site.intro)) heroIntro.classList.add("is-placeholder");

  var statsEl = document.getElementById("stats");
  (STORY.stats || []).forEach(function (s) {
    var li = el("li", "stat");
    li.appendChild(el("span", "stat__value", s.value));
    li.appendChild(el("span", "stat__label", s.label));
    statsEl.appendChild(li);
  });

  var scrollLink = document.getElementById("hero-scroll");
  if (site.scrollHint) scrollLink.setAttribute("aria-label", site.scrollHint);

  /* ── Scènes ─────────────────────────────────────────── */
  var story = document.getElementById("story");
  var spine = STORY.spine || [];

  (STORY.scenes || []).forEach(function (scene, index) {
    var section = el("section", "scene");
    section.id = "scene-" + scene.id;
    section.setAttribute("data-index", String(index));

    var inner = el("div", "scene__inner");

    /* Kunstwerk */
    if (scene.art) {
      var artWrap = el("figure", "scene__art");
      var img = document.createElement("img");
      img.src = scene.art;
      img.alt = scene.artAlt || "";
      img.loading = "lazy";
      artWrap.appendChild(img);
      if (scene.artCaption) {
        var cap = el("figcaption", "scene__caption", scene.artCaption);
        artWrap.appendChild(cap);
      }
      inner.appendChild(artWrap);
    }

    /* Tekst */
    var body = el("div", "scene__body");
    var meta = el("div", "scene__meta");
    meta.appendChild(el("span", "scene__kicker", scene.kicker || ""));
    meta.appendChild(el("span", "scene__eyebrow", scene.eyebrow || (spine[index] || "")));
    body.appendChild(meta);
    body.appendChild(el("h2", "scene__title", scene.title || ""));
    addProse(body, scene.prose);
    addFacts(body, scene.facts);
    inner.appendChild(body);

    section.appendChild(inner);
    story.appendChild(section);
  });

  /* ── Outro ──────────────────────────────────────────── */
  var outro = STORY.outro || {};
  document.getElementById("outro-title").textContent = outro.title || "";
  var outroLines = document.getElementById("outro-lines");
  (outro.lines || []).forEach(function (line) {
    outroLines.appendChild(
      el("p", "prose" + (isPlaceholder(line) ? " is-placeholder" : ""), line)
    );
  });
  var credits = document.getElementById("outro-credits");
  (outro.credits || []).forEach(function (c) {
    credits.appendChild(el("li", "", c));
  });

  /* ── Rail ───────────────────────────────────────────── */
  var rail = document.getElementById("rail");
  var sections = Array.prototype.slice.call(story.querySelectorAll(".scene"));
  var dots = sections.map(function (section, i) {
    var sceneData = STORY.scenes[i] || {};
    var a = el("a", "rail__dot");
    a.href = "#" + section.id;
    a.setAttribute("aria-label", sceneData.eyebrow || "Hoofdstuk " + (i + 1));
    var label = el("span", "rail__label", sceneData.eyebrow || sceneData.title || "");
    a.appendChild(label);
    a.addEventListener("click", function (e) {
      e.preventDefault();
      section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
    rail.appendChild(a);
    return a;
  });

  /* ── Reveal + actieve sectie ────────────────────────── */
  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    document.querySelectorAll(".scene, .hero__inner, .outro__inner").forEach(function (n) {
      n.classList.add("reveal");
      revealObserver.observe(n);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (n) {
      n.classList.add("is-visible");
    });
  }

  if ("IntersectionObserver" in window) {
    var activeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var idx = Number(entry.target.getAttribute("data-index"));
            dots.forEach(function (d, i) {
              d.classList.toggle("is-active", i === idx);
            });
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach(function (s) {
      activeObserver.observe(s);
    });
  }

  /* ── Voortgangsbalk ─────────────────────────────────── */
  var bar = document.getElementById("progress-bar");
  function onScroll() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    bar.style.width = pct + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();
