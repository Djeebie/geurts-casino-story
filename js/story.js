/*
 * story.js — bouwt de scroll-animaties met GSAP + ScrollTrigger.
 * Als GSAP ontbreekt of de gebruiker minder beweging wil, blijft de
 * rustige IntersectionObserver-fallback uit main.js gewoon werken.
 *
 * Je hoeft dit bestand niet aan te passen.
 */
(function () {
  "use strict";

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!gsap || !ScrollTrigger || reduced) return;

  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add("gsap-on");

  /* main.js zet .reveal (opacity:0) op dezelfde elementen die GSAP animeert.
     GSAP's `from` eindigt op de *huidige* waarde, dus die 0 zou de animatie
     vergiftigen (0 → 0). Haal de class weg: GSAP neemt de reveal over. */
  gsap.utils.toArray(".reveal").forEach(function (node) {
    node.classList.remove("reveal", "is-visible");
  });

  var desktop = window.matchMedia("(min-width: 821px)").matches;

  /* ── Opening (hero) ─────────────────────────────────── */
  var heroBits = [
    document.getElementById("hero-period"),
    document.getElementById("hero-title"),
    document.getElementById("hero-subtitle"),
    document.getElementById("hero-intro"),
    document.getElementById("hero-art"),
    document.getElementById("stats"),
    document.getElementById("hero-scroll"),
  ].filter(Boolean);

  gsap.from(heroBits, {
    opacity: 0,
    y: 34,
    duration: 1,
    ease: "power3.out",
    stagger: 0.12,
    delay: 0.15,
  });

  /* ── Hoofdstuk-headers ──────────────────────────────── */
  gsap.utils.toArray(".chapter__header").forEach(function (header) {
    gsap.from(header, {
      opacity: 0,
      y: 44,
      duration: 0.95,
      ease: "power3.out",
      scrollTrigger: { trigger: header, start: "top 85%" },
    });
  });

  /* ── Tekst ──────────────────────────────────────────── */
  gsap.utils.toArray(".block--text").forEach(function (block) {
    gsap.from(block, {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: { trigger: block, start: "top 88%" },
    });
  });

  /* ── Feitkaarten ────────────────────────────────────── */
  ScrollTrigger.batch(".block--facts .fact", {
    start: "top 90%",
    onEnter: function (batch) {
      gsap.from(batch, {
        opacity: 0,
        y: 26,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.08,
      });
    },
    once: true,
  });

  /* ── Gallery ────────────────────────────────────────── */
  ScrollTrigger.batch(".gallery__item", {
    start: "top 90%",
    onEnter: function (batch) {
      gsap.from(batch, {
        opacity: 0,
        y: 36,
        scale: 0.97,
        duration: 0.75,
        ease: "power2.out",
        stagger: 0.12,
      });
    },
    once: true,
  });

  /* ── Beeldblokken ───────────────────────────────────── */
  gsap.utils.toArray(".block--image").forEach(function (fig) {
    var variant = fig.getAttribute("data-variant");
    var img = fig.querySelector(".block__img");
    if (!img) return;

    if (variant === "parallax" && desktop) {
      gsap.fromTo(
        img,
        { scale: 1.18, yPercent: -6 },
        {
          scale: 1.02,
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: fig,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    } else if (variant === "full") {
      gsap.fromTo(
        img,
        { scale: 1.12 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: fig,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      gsap.from(fig, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: fig, start: "top 88%" },
      });
    } else if (variant === "pin" && desktop) {
      gsap.fromTo(
        img,
        { scale: 1.15 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: fig,
            start: "top 90%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    } else {
      gsap.from(fig, {
        opacity: 0,
        y: 40,
        scale: 0.97,
        duration: 0.85,
        ease: "power2.out",
        scrollTrigger: { trigger: fig, start: "top 88%" },
      });
    }
  });

  /* ── Outro + stats ──────────────────────────────────── */
  gsap.utils.toArray(".outro__inner").forEach(function (block) {
    gsap.from(block, {
      opacity: 0,
      y: 34,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: { trigger: block, start: "top 88%" },
    });
  });

  /* ── Herbereken na het laden van afbeeldingen ───────── */
  window.addEventListener("load", function () {
    ScrollTrigger.refresh();
  });
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      ScrollTrigger.refresh();
    });
  }
})();
