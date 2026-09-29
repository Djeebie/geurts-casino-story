/*
 * effects.js — alle deeltjes- en feesteffecten op één plek.
 * Gebruikt canvas-confetti (js/confetti.min.js). Respecteert
 * prefers-reduced-motion en zwakt effecten af op smalle schermen.
 *
 * main.js roept window.Effects.* aan. Je hoeft dit bestand niet te bewerken.
 */
(function () {
  "use strict";

  var confetti = window.confetti;
  var reduceMotion =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var narrow =
    window.matchMedia &&
    (window.matchMedia("(max-width: 720px)").matches ||
      (window.matchMedia("(pointer: coarse)").matches && window.innerWidth < 900));

  var FALLBACK = ["#d4af37", "#f5d576", "#f7f1e1"];

  function isDisabled() {
    return reduceMotion || typeof confetti !== "function";
  }

  /* Lees de effectkleuren (--fx-1/2/3) van een element of zijn ouders. */
  function themeColors(el) {
    var node = el && el.closest ? el.closest(".chapter, .hero, .outro") : null;
    if (!node) node = document.documentElement;
    var styles = getComputedStyle(node);
    var colors = ["--theme-fx-1", "--theme-fx-2", "--theme-fx-3"]
      .map(function (name) {
        return styles.getPropertyValue(name).trim() || styles.getPropertyValue(name.replace("--theme-", "--")).trim();
      })
      .filter(Boolean);
    return colors.length ? colors : FALLBACK;
  }

  function scale(count) {
    if (narrow) return Math.max(1, Math.round(count * 0.45));
    return count;
  }

  /* ── Confetti ──────────────────────────────────────── */

  function burst(el, opts) {
    if (isDisabled()) return;
    opts = opts || {};
    var colors = opts.colors || themeColors(el);
    var origin = opts.origin || { x: 0.5, y: 0.4 };
    confetti({
      particleCount: scale(opts.count || 60),
      spread: opts.spread || 68,
      startVelocity: opts.velocity || 36,
      scalar: narrow ? 0.8 : 0.95,
      ticks: opts.ticks || 200,
      gravity: opts.gravity != null ? opts.gravity : 1,
      origin: origin,
      colors: colors,
      disableForReducedMotion: true,
    });
  }

  function explosion(el, opts) {
    if (isDisabled()) return;
    opts = opts || {};
    var colors = opts.colors || themeColors(el);
    var origin = opts.origin || { x: 0.5, y: 0.5 };
    var shoot = function (angle, count) {
      confetti({
        particleCount: scale(count),
        angle: angle,
        spread: 70,
        startVelocity: 55,
        scalar: narrow ? 0.85 : 1.05,
        ticks: 260,
        origin: origin,
        colors: colors,
        disableForReducedMotion: true,
      });
    };
    shoot(60, 80);
    shoot(120, 80);
    setTimeout(function () {
      shoot(90, 60);
    }, 180);
  }

  function sideCannons(el) {
    if (isDisabled()) return;
    var colors = themeColors(el);
    var end = Date.now() + (narrow ? 500 : 900);
    (function frame() {
      confetti({
        particleCount: scale(4),
        angle: 60,
        spread: 55,
        startVelocity: 45,
        origin: { x: 0, y: 0.7 },
        colors: colors,
        disableForReducedMotion: true,
      });
      confetti({
        particleCount: scale(4),
        angle: 120,
        spread: 55,
        startVelocity: 45,
        origin: { x: 1, y: 0.7 },
        colors: colors,
        disableForReducedMotion: true,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  /* ── As / stof (in memoriam) ──────────────────────── */

  function dust(el) {
    if (isDisabled()) return;
    confetti({
      particleCount: scale(70),
      spread: 180,
      startVelocity: 6,
      gravity: 0.22,
      drift: (Math.random() - 0.5) * 1.4,
      decay: 0.94,
      scalar: narrow ? 0.7 : 0.95,
      ticks: 420,
      shapes: ["circle"],
      origin: { x: 0.5, y: -0.1 },
      colors: ["#c9c9c9", "#8f8f8f", "#6d6d6d", "#e6e6e6"],
      disableForReducedMotion: true,
    });
    confetti({
      particleCount: scale(45),
      spread: 160,
      startVelocity: 5,
      gravity: 0.18,
      drift: (Math.random() - 0.5) * 1.2,
      decay: 0.95,
      scalar: narrow ? 0.6 : 0.8,
      ticks: 460,
      shapes: ["circle"],
      origin: { x: 0.5, y: -0.08 },
      colors: ["#b9b9b9", "#7a7a7a"],
      disableForReducedMotion: true,
    });
  }

  /* ── Entry-effect per thema ───────────────────────── */

  function entry(kind, el) {
    if (isDisabled()) return;
    switch (kind) {
      case "dust":
        dust(el);
        break;
      case "gold":
        burst(el, { count: 90, spread: 80, velocity: 40, colors: ["#e6c15a", "#f5d576", "#fff3c4", "#b8860b"] });
        break;
      case "explosion":
        explosion(el);
        break;
      case "cannons":
        sideCannons(el);
        break;
      case "neon":
        burst(el, { count: 80, spread: 90, velocity: 42 });
        break;
      case "arcade":
        burst(el, { count: 80, spread: 100, velocity: 44, colors: ["#00e5ff", "#ff2d95", "#ffe14d", "#7cff6b", "#b18cff"] });
        break;
      case "blueprint":
        burst(el, { count: 70, spread: 78, velocity: 38, colors: ["#eaf4ff", "#9fd0ff", "#4f9be0", "#ffffff"] });
        break;
      default:
        burst(el, { count: 70, spread: 78 });
    }
  }

  /* Klik-effecten (easter eggs) */
  function clickExplosion(el, kind) {
    if (isDisabled()) return;
    if (kind === "dust") {
      dust(el);
    } else if (kind === "gold") {
      explosion(el, { colors: ["#e6c15a", "#f5d576", "#fff3c4", "#b8860b"] });
    } else {
      explosion(el);
    }
  }

  window.Effects = {
    entry: entry,
    burst: burst,
    explosion: explosion,
    dust: dust,
    sparkleBurst: function (el) {
      if (isDisabled()) return;
      var rect = el.getBoundingClientRect();
      burst(el, {
        count: 26,
        spread: 55,
        velocity: 26,
        scalar: 0.6,
        ticks: 120,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
      });
    },
    clickExplosion: clickExplosion,
    reduced: reduceMotion,
    narrow: narrow,
  };
})();
