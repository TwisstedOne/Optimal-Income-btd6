/*
  Image variable mapping.

  Leave src as "" to use the emoji fallback.
  When you add your own images, put them in assets/icons or assets/towers,
  then set src to the relative path.

  Example:
  bananaFarm: { src: "assets/towers/banana-farm.png", fallback: "🍌" }

  Variable names are up to you. app.js uses these keys through iconKey fields.
*/

window.BTD6_IMAGES = {
  timed: { src: "", fallback: "⏱️" },
  leastCash: { src: "", fallback: "💸" },
  leastTiers: { src: "", fallback: "🏆" },

  money: { src: "", fallback: "💰" },
  value: { src: "", fallback: "💎" },
  lives: { src: "", fallback: "▶️" },
  mk: { src: "", fallback: "🧠" },
  monkey: { src: "", fallback: "🐵" },
  boat: { src: "", fallback: "⛵" },

  bananaFarm: { src: "", fallback: "🍌" },
  boomerang: { src: "", fallback: "🪃" },
  dartMonkey: { src: "", fallback: "🎯" },
  village: { src: "", fallback: "🏘️" }
};
