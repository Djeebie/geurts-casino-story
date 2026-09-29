/* main.js — rendert het verhaal uit js/content.js tot hoofdstukken en blokken.
 * Je hoeft hier niets aan te passen. js/story.js doet daarna de GSAP-animaties. */
(function () {
  "use strict";

  var STORY = window.STORY;
  if (!STORY) {
    console.error("content.js niet geladen: window.STORY ontbreekt.");
    return;
  }

  var FX = window.Effects || {
    entry: function () {},
    clickExplosion: function () {},
    sparkleBurst: function () {},
    reduced: true,
  };
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

  function makeClickable(node, kind) {
    node.setAttribute("data-egg", kind);
    node.setAttribute("role", "button");
    node.setAttribute("tabindex", "0");
    node.setAttribute("title", "Klik voor een verrassing");
    function fire() {
      FX.clickExplosion(node, kind);
    }
    node.addEventListener("click", fire);
    node.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        fire();
      }
    });
  }

  /* ── Blok-renderers ─────────────────────────────────── */

  function renderText(block) {
    var wrap = el("div", "block block--text size--" + (block.size || "short"));
    wrap.setAttribute("data-reveal", "text");
    var p = el("p", "prose" + (isPlaceholder(block.text) ? " is-placeholder" : ""), block.text);
    wrap.appendChild(p);
    return wrap;
  }

  function mediaNode(src, alt) {
    var media = el("div", "block__media");
    var img = document.createElement("img");
    img.className = "block__img";
    img.src = src;
    img.alt = alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    media.appendChild(img);
    return media;
  }

  function renderImage(block) {
    var variant = block.variant || "frame";
    var fig = el("figure", "block block--image variant--" + variant);
    fig.setAttribute("data-variant", variant);
    fig.setAttribute("data-reveal", "image");
    fig.appendChild(mediaNode(block.src, block.alt));
    if (block.caption) {
      fig.appendChild(el("figcaption", "block__caption", block.caption));
    }
    if (block.egg) makeClickable(fig, block.egg);
    return fig;
  }

  function renderGallery(block) {
    var wrap = el("div", "block block--gallery");
    wrap.setAttribute("data-reveal", "image");
    var grid = el("div", "gallery");
    (block.images || []).forEach(function (item) {
      var fig = el("figure", "gallery__item");
      fig.appendChild(mediaNode(item.src, item.alt));
      if (item.caption) {
        fig.appendChild(el("figcaption", "block__caption", item.caption));
      }
      grid.appendChild(fig);
    });
    wrap.appendChild(grid);
    return wrap;
  }

  function renderFacts(block) {
    var wrap = el("div", "block block--facts");
    wrap.setAttribute("data-reveal", "facts");
    var grid = el("ul", "facts");
    (block.facts || []).forEach(function (f) {
      var li = el("li", "fact");
      if (f.celebrate) li.classList.add("fact--celebrate");
      if (f.egg) makeClickable(li, f.egg);
      var pip = el("span", "fact__pip");
      pip.setAttribute("aria-hidden", "true");
      li.appendChild(pip);
      li.appendChild(el("span", "fact__value", f.value));
      li.appendChild(el("span", "fact__label", f.label));
      grid.appendChild(li);
    });
    wrap.appendChild(grid);
    return wrap;
  }

  function renderDivider() {
    var wrap = el("div", "block block--divider");
    wrap.setAttribute("aria-hidden", "true");
    wrap.appendChild(el("span", "divider__mark", "✦"));
    return wrap;
  }

  var BLOCKS = {
    text: renderText,
    image: renderImage,
    gallery: renderGallery,
    facts: renderFacts,
    divider: renderDivider,
  };

  /* ── Hero ───────────────────────────────────────────── */
  var site = STORY.site || {};
  document.getElementById("hero-period").textContent = site.period || "";
  document.getElementById("hero-title").textContent = site.title || "";
  document.getElementById("hero-subtitle").textContent = site.subtitle || "";
  var heroIntro = document.getElementById("hero-intro");
  heroIntro.textContent = site.intro || "";
  if (isPlaceholder(site.intro)) heroIntro.classList.add("is-placeholder");

  if (site.heroArt) {
    var heroArt = document.getElementById("hero-art");
    if (heroArt) {
      heroArt.src = site.heroArt;
      heroArt.alt = site.heroArtAlt || "";
    }
  }

  var statsEl = document.getElementById("stats");
  (STORY.stats || []).forEach(function (s) {
    var li = el("li", "stat");
    li.setAttribute("data-reveal", "stat");
    li.appendChild(el("span", "stat__value", s.value));
    li.appendChild(el("span", "stat__label", s.label));
    statsEl.appendChild(li);
  });

  var scrollLink = document.getElementById("hero-scroll");
  if (site.scrollHint) scrollLink.setAttribute("aria-label", site.scrollHint);

  /* ── Hoofdstukken ───────────────────────────────────── */
  var story = document.getElementById("story");
  var chapterNodes = [];

  (STORY.chapters || []).forEach(function (chapter, index) {
    var section = el("section", "chapter theme--" + (chapter.theme || "klassiek"));
    section.id = "chapter-" + chapter.id;
    section.setAttribute("data-index", String(index));
    section.setAttribute("data-theme", chapter.theme || "klassiek");
    if (chapter.entry) section.setAttribute("data-entry", chapter.entry);

    var header = el("header", "chapter__header");
    header.setAttribute("data-reveal", "header");
    var meta = el("div", "chapter__meta");
    meta.appendChild(el("span", "chapter__kicker", chapter.kicker || ""));
    meta.appendChild(el("span", "chapter__eyebrow", chapter.eyebrow || ""));
    header.appendChild(meta);
    header.appendChild(el("h2", "chapter__title", chapter.title || ""));
    section.appendChild(header);

    (chapter.blocks || []).forEach(function (block) {
      var fn = BLOCKS[block.type];
      if (fn) section.appendChild(fn(block));
      else if (window.console) console.warn("Onbekend bloktype:", block.type);
    });

    story.appendChild(section);
    chapterNodes.push({ node: section, chapter: chapter });
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
  var chapters = Array.prototype.slice.call(story.querySelectorAll(".chapter"));
  var dots = chapters.map(function (section, i) {
    var data = STORY.chapters[i] || {};
    var a = el("a", "rail__dot");
    a.href = "#" + section.id;
    a.setAttribute("aria-label", data.eyebrow || "Hoofdstuk " + (i + 1));
    a.appendChild(el("span", "rail__label", data.eyebrow || data.title || ""));
    a.addEventListener("click", function (e) {
      e.preventDefault();
      section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    });
    rail.appendChild(a);
    return a;
  });

  /* ── Reveal (basis; GSAP bouwt hierop voort) ────────── */
  var revealTargets = Array.prototype.slice.call(
    document.querySelectorAll(".chapter__header, .block, .hero__inner, .stat, .outro__inner")
  );
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
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    revealTargets.forEach(function (n) {
      n.classList.add("reveal");
      revealObserver.observe(n);
    });
  } else {
    revealTargets.forEach(function (n) {
      n.classList.add("reveal", "is-visible");
    });
  }

  /* ── Entry-effecten (één keer per hoofdstuk) ────────── */
  if ("IntersectionObserver" in window && !FX.reduced) {
    var effectObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var idx = Number(entry.target.getAttribute("data-index"));
            var data = chapterNodes[idx];
            if (data && data.chapter.entry) FX.entry(data.chapter.entry, entry.target);
            effectObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    chapterNodes.forEach(function (c) {
      effectObserver.observe(c.node);
    });
  }

  /* ── Sparkle op feitkaarten ─────────────────────────── */
  var sparkleCards = Array.prototype.slice.call(document.querySelectorAll(".fact--celebrate"));
  if (sparkleCards.length && "IntersectionObserver" in window && !FX.reduced) {
    var sparkleObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-sparkling");
            FX.sparkleBurst(entry.target);
            sparkleObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    sparkleCards.forEach(function (c) {
      sparkleObserver.observe(c);
    });
  }

  /* ── Actief hoofdstuk (rail + accent) ───────────────── */
  if ("IntersectionObserver" in window) {
    var activeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var idx = Number(entry.target.getAttribute("data-index"));
            dots.forEach(function (d, i) {
              d.classList.toggle("is-active", i === idx);
            });
            var root = document.documentElement;
            root.style.setProperty("--chapter-index", String(idx));
            root.setAttribute("data-chapter-theme", entry.target.getAttribute("data-theme"));
            /* Accentkleuren vloeiend overnemen van het actieve hoofdstuk. */
            var cs = window.getComputedStyle(entry.target);
            ["--theme-accent", "--theme-accent-2", "--theme-fx-1", "--theme-fx-2", "--theme-fx-3"].forEach(
              function (name) {
                var val = cs.getPropertyValue(name).trim();
                if (val) {
                  var target = name.replace("--theme-", "--");
                  root.style.setProperty(target, val);
                }
              }
            );
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    chapters.forEach(function (s) {
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

  /* Klaar: story.js mag nu de GSAP-animaties opzetten. */
  document.documentElement.setAttribute("data-story-ready", "1");
  window.dispatchEvent(new CustomEvent("story:ready"));
})();
