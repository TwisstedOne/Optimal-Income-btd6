/*
  Tower data framework.

  Add/adjust towers here.
  Costs and income are placeholders. You can put your real math data here later.

  upgradeCosts:
    "100": cost to go from 000 to 100
    "200": cost to go from 100 to 200
    "010": cost to go from 000 to 010
    etc.

  The framework can already drag/place/upgrade/sell.
  The real optimization math belongs in app.js.
*/

window.BTD6_TOWERS = [
  {
    id: "banana-farm",
    name: "Banana Farm",
    shortName: "Farm",
    category: "Farm",
    iconKey: "bananaFarm",
    baseCost: 1250,
    sellbackRate: 0.70,
    enabled: true,

    paths: {
      top: true,
      middle: true,
      bottom: true
    },

    upgradeCosts: {
      "100": 500,
      "200": 600,
      "300": 3000,
      "400": 19000,
      "500": 100000,

      "010": 300,
      "020": 800,
      "030": 3500,
      "040": 7500,
      "050": 100000,

      "001": 250,
      "002": 400,
      "003": 2900,
      "004": 20000,
      "005": 70000
    }
  },

  {
    id: "boomerang",
    name: "Boomerang Monkey",
    shortName: "Boomerang",
    category: "Primary",
    iconKey: "boomerang",
    baseCost: 325,
    sellbackRate: 0.70,
    enabled: true,

    paths: {
      top: true,
      middle: true,
      bottom: true
    },

    upgradeCosts: {}
  },

  {
    id: "dart-monkey",
    name: "Dart Monkey",
    shortName: "Dart",
    category: "Primary",
    iconKey: "dartMonkey",
    baseCost: 215,
    sellbackRate: 0.70,
    enabled: true,

    paths: {
      top: true,
      middle: true,
      bottom: true
    },

    upgradeCosts: {}
  },

  {
    id: "monkey-village",
    name: "Monkey Village",
    shortName: "Village",
    category: "Support",
    iconKey: "village",
    baseCost: 1200,
    sellbackRate: 0.70,
    enabled: true,

    paths: {
      top: true,
      middle: true,
      bottom: true
    },

    upgradeCosts: {}
  }
];
