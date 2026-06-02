const MAX_ROUND = 140;

const state = {
  settings: {
    mode: "Timed",
    goal: "money",
    targetCashByRound: "",
    startingCash: 650,
    startingLives: 200,
    monkeyKnowledge: true,
    selectedHero: "Quincy",
    maxTowers: 999,
    maxBananaFarms: 999,
    maxBoatSpots: 0
  },

  endRound: 40,
  events: [],
  monkeyInstances: {},
  towerCounts: {},
  selectedEventId: null,
  nextEventNumber: 1,
  nextMonkeyNumber: 1
};

const el = {
  targetCashSubsection: document.getElementById("targetCashSubsection"),
  targetCashByRound: document.getElementById("targetCashByRound"),
  startingCash: document.getElementById("startingCash"),
  startingLives: document.getElementById("startingLives"),
  monkeyKnowledge: document.getElementById("monkeyKnowledge"),
  selectedHero: document.getElementById("selectedHero"),
  maxTowers: document.getElementById("maxTowers"),
  maxBananaFarms: document.getElementById("maxBananaFarms"),
  maxBoatSpots: document.getElementById("maxBoatSpots"),
  endRoundInput: document.getElementById("endRoundInput"),
  buildRoundsButton: document.getElementById("buildRoundsButton"),
  calculateButton: document.getElementById("calculateButton"),
  roundTableBody: document.getElementById("roundTableBody"),
  cumulativeList: document.getElementById("cumulativeList"),
  availableTowerList: document.getElementById("availableTowerList"),
  existingTowerList: document.getElementById("existingTowerList"),
  availabilityList: document.getElementById("availabilityList"),
  inspectorContent: document.getElementById("inspectorContent"),
  clearSelectionButton: document.getElementById("clearSelectionButton"),
  toast: document.getElementById("toast")
};

function init() {
  hydrateIcons();
  bindGlobalControls();
  bindTabs();
  renderAll();
}

function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon-key]").forEach(slot => {
    const key = slot.dataset.iconKey;
    slot.innerHTML = iconHtml(key);
  });
}

function iconHtml(key) {
  const entry = window.BTD6_IMAGES?.[key];

  if (!entry) {
    return `<span class="icon-fallback">❔</span>`;
  }

  if (entry.src) {
    return `<img class="icon-img" src="${entry.src}" alt="${key}" draggable="false">`;
  }

  return `<span class="icon-fallback">${entry.fallback || "●"}</span>`;
}

function bindGlobalControls() {
  document.querySelectorAll(".segment-option").forEach(button => {
    button.addEventListener("click", () => {
      const setting = button.dataset.setting;
      const value = button.dataset.value;

      button.parentElement
        .querySelectorAll(".segment-option")
        .forEach(other => other.classList.remove("active"));

      button.classList.add("active");
      state.settings[setting] = value;

      updateConditionalControls();
    });
  });

  [
    ["targetCashByRound", "targetCashByRound", "string"],
    ["startingCash", "startingCash", "number"],
    ["startingLives", "startingLives", "number"],
    ["selectedHero", "selectedHero", "string"],
    ["maxTowers", "maxTowers", "number"],
    ["maxBananaFarms", "maxBananaFarms", "number"],
    ["maxBoatSpots", "maxBoatSpots", "number"]
  ].forEach(([elementKey, settingKey, type]) => {
    el[elementKey].addEventListener("input", event => {
      const rawValue = event.target.value;
      state.settings[settingKey] = type === "number" ? Number(rawValue) : rawValue;
      renderRoundTable();
      renderCumulative();
    });
  });

  el.monkeyKnowledge.addEventListener("change", event => {
    state.settings.monkeyKnowledge = event.target.checked;
  });

  el.endRoundInput.addEventListener("input", event => {
    const value = clamp(Number(event.target.value || 1), 1, MAX_ROUND);
    state.endRound = value;
  });

  el.buildRoundsButton.addEventListener("click", () => {
    state.endRound = clamp(Number(el.endRoundInput.value || 1), 1, MAX_ROUND);
    renderRoundTable();
    renderCumulative();
  });

  el.calculateButton.addEventListener("click", runCalculator);

  el.clearSelectionButton.addEventListener("click", () => {
    state.selectedEventId = null;
    renderInspector();
    renderRoundTable();
  });
}

function bindTabs() {
  document.querySelectorAll("[data-center-tab]").forEach(button => {
    button.addEventListener("click", () => {
      setTab("center", button.dataset.centerTab);
    });
  });

  document.querySelectorAll("[data-right-tab]").forEach(button => {
    button.addEventListener("click", () => {
      setTab("right", button.dataset.rightTab);
    });
  });
}

function setTab(side, tabName) {
  const buttonSelector = side === "center" ? "[data-center-tab]" : "[data-right-tab]";
  const pageIds = side === "center"
    ? ["editorTab", "cumulativeTab"]
    : ["availableTab", "existingTab", "availabilityTab"];

  document.querySelectorAll(buttonSelector).forEach(button => {
    const isActive =
      (side === "center" && button.dataset.centerTab === tabName) ||
      (side === "right" && button.dataset.rightTab === tabName);

    button.classList.toggle("active", isActive);
  });

  pageIds.forEach(id => {
    const page = document.getElementById(id);
    page.classList.toggle("active", id === `${tabName}Tab`);
  });

  if (tabName === "cumulative") {
    renderCumulative();
  }
}

function updateConditionalControls() {
  const isCashOrTiers =
    state.settings.mode === "Least Cash" ||
    state.settings.mode === "Least Tiers";

  el.targetCashSubsection.classList.toggle("hidden", !isCashOrTiers);
}

function renderAll() {
  updateConditionalControls();
  renderAvailableTowers();
  renderExistingTowers();
  renderAvailabilityRules();
  renderRoundTable();
  renderCumulative();
  renderInspector();
}

function renderAvailableTowers() {
  el.availableTowerList.innerHTML = "";

  window.BTD6_TOWERS.forEach(tower => {
    const disabled = !tower.enabled;

    const card = document.createElement("div");
    card.className = `tower-card ${disabled ? "disabled" : ""}`;
    card.draggable = !disabled;
    card.dataset.dragType = "new-tower";
    card.dataset.towerId = tower.id;

    card.innerHTML = `
      <div class="card-title">
        ${iconHtml(tower.iconKey)}
        <span>${tower.name}</span>
      </div>
      <div class="card-meta">
        Base cost: ${formatMoney(tower.baseCost)} · ${tower.category}
      </div>
      <div class="path-row">
        <span class="path-pill ${tower.paths.top ? "on" : ""}">Top</span>
        <span class="path-pill ${tower.paths.middle ? "on" : ""}">Mid</span>
        <span class="path-pill ${tower.paths.bottom ? "on" : ""}">Bot</span>
      </div>
    `;

    card.addEventListener("dragstart", event => {
      if (disabled) {
        event.preventDefault();
        return;
      }

      event.dataTransfer.setData("text/plain", JSON.stringify({
        type: "new-tower",
        towerId: tower.id
      }));
    });

    el.availableTowerList.appendChild(card);
  });
}

function renderExistingTowers() {
  el.existingTowerList.innerHTML = "";

  const instances = Object.values(state.monkeyInstances);

  if (instances.length === 0) {
    el.existingTowerList.innerHTML = `<div class="empty-inspector">No placed monkeys yet.</div>`;
    return;
  }

  instances.forEach(instance => {
    const tower = getTower(instance.towerId);
    const current = getMonkeyStateAtRound(instance.id, state.endRound);
    const disabled = current.sold || isUpgradeMaxed(current.upgrade, tower);

    const card = document.createElement("div");
    card.className = `existing-card ${disabled ? "disabled" : ""}`;
    card.draggable = !disabled;
    card.dataset.dragType = "existing-monkey";
    card.dataset.monkeyId = instance.id;

    card.innerHTML = `
      <div class="card-title">
        ${iconHtml(tower.iconKey)}
        <span>${instance.label}</span>
      </div>
      <div class="card-meta">
        Current: ${current.sold ? "Sold" : current.upgrade}
        ${disabled && !current.sold ? "· Maxed" : ""}
      </div>
    `;

    card.addEventListener("dragstart", event => {
      if (disabled) {
        event.preventDefault();
        return;
      }

      event.dataTransfer.setData("text/plain", JSON.stringify({
        type: "existing-monkey",
        monkeyId: instance.id
      }));
    });

    el.existingTowerList.appendChild(card);
  });
}

function renderAvailabilityRules() {
  el.availabilityList.innerHTML = "";

  window.BTD6_TOWERS.forEach(tower => {
    const card = document.createElement("div");
    card.className = "availability-card";

    card.innerHTML = `
      <label>
        <input type="checkbox" data-rule="tower" data-tower-id="${tower.id}" ${tower.enabled ? "checked" : ""}>
        <strong>${tower.name}</strong>
      </label>

      <div class="path-row">
        <label>
          <input type="checkbox" data-rule="path" data-tower-id="${tower.id}" data-path="top" ${tower.paths.top ? "checked" : ""}>
          Top
        </label>

        <label>
          <input type="checkbox" data-rule="path" data-tower-id="${tower.id}" data-path="middle" ${tower.paths.middle ? "checked" : ""}>
          Mid
        </label>

        <label>
          <input type="checkbox" data-rule="path" data-tower-id="${tower.id}" data-path="bottom" ${tower.paths.bottom ? "checked" : ""}>
          Bot
        </label>
      </div>
    `;

    card.querySelectorAll("input").forEach(input => {
      input.addEventListener("change", event => {
        const rule = event.target.dataset.rule;
        const towerId = event.target.dataset.towerId;
        const targetTower = getTower(towerId);

        if (rule === "tower") {
          targetTower.enabled = event.target.checked;
        }

        if (rule === "path") {
          const path = event.target.dataset.path;
          targetTower.paths[path] = event.target.checked;
        }

        renderAvailableTowers();
        renderExistingTowers();
      });
    });

    el.availabilityList.appendChild(card);
  });
}

function renderRoundTable() {
  const rows = calculateRows();
  el.roundTableBody.innerHTML = "";

  rows.forEach(row => {
    const tr = document.createElement("tr");
    tr.className = `round-row ${row.conflict ? "conflict" : "ok"}`;
    tr.dataset.round = row.round;

    tr.innerHTML = `
      <td><strong>${row.round}</strong></td>
      <td class="money-cell">${formatMoney(row.startMoney)}</td>
      <td class="money-cell">${formatMoney(row.income)}</td>
      <td class="money-cell">${formatMoney(row.endMoney)}</td>
      <td>
        <div class="round-actions" data-drop-round="${row.round}">
          ${renderEventChipsForRound(row.round)}
        </div>
      </td>
    `;

    bindDropHandlers(tr, row.round);
    el.roundTableBody.appendChild(tr);
  });
}

function renderEventChipsForRound(round) {
  const events = state.events
    .filter(event => event.round === round)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  if (events.length === 0) {
    return `<span class="empty-drop-zone">Drop monkey here</span>`;
  }

  return events.map(event => eventChipHtml(event)).join("");
}

function eventChipHtml(event) {
  const instance = state.monkeyInstances[event.monkeyId];
  const tower = getTower(event.towerId);
  const selected = event.id === state.selectedEventId ? "selected" : "";
  const generated = event.source === "generated" ? "generated" : "";
  const sell = event.type === "sell" ? "sell" : "";

  let label = "";

  if (event.type === "place") {
    label = `Place ${instance.label}`;
  } else if (event.type === "upgrade") {
    label = `${instance.label} → <span class="upgrade-code">${event.upgrade}</span>`;
  } else if (event.type === "sell") {
    label = `Sell ${instance.label}`;
  }

  return `
    <button
      class="action-chip ${selected} ${generated} ${sell}"
      data-event-id="${event.id}"
      onclick="selectEvent('${event.id}')"
      title="${event.type} ${instance.label}"
    >
      ${iconHtml(tower.iconKey)}
      <span class="chip-title">${label}</span>
    </button>
  `;
}

function bindDropHandlers(rowElement, round) {
  rowElement.addEventListener("dragover", event => {
    event.preventDefault();
    rowElement.classList.add("drop-hover");
  });

  rowElement.addEventListener("dragleave", () => {
    rowElement.classList.remove("drop-hover");
  });

  rowElement.addEventListener("drop", event => {
    event.preventDefault();
    rowElement.classList.remove("drop-hover");

    const raw = event.dataTransfer.getData("text/plain");
    if (!raw) return;

    const payload = JSON.parse(raw);

    if (payload.type === "new-tower") {
      placeNewTower(payload.towerId, round);
      return;
    }

    if (payload.type === "existing-monkey") {
      addNextUpgrade(payload.monkeyId, round);
    }
  });
}

function placeNewTower(towerId, round) {
  const tower = getTower(towerId);

  if (!tower.enabled) {
    showToast("That tower is disabled in availability rules.");
    return;
  }

  if (wouldBreakTowerLimits(towerId)) {
    showToast("Tower limit would be exceeded.");
    return;
  }

  const monkeyId = makeId("monkey", state.nextMonkeyNumber++);
  const label = makeMonkeyLabel(tower);

  state.monkeyInstances[monkeyId] = {
    id: monkeyId,
    towerId,
    label
  };

  incrementTowerCount(towerId);

  state.events.push({
    id: makeId("event", state.nextEventNumber++),
    monkeyId,
    towerId,
    round,
    type: "place",
    upgrade: "000",
    source: "manual",
    sortOrder: Date.now()
  });

  renderAll();
}

function addNextUpgrade(monkeyId, round) {
  const instance = state.monkeyInstances[monkeyId];

  if (!instance) {
    showToast("Could not find that monkey.");
    return;
  }

  const tower = getTower(instance.towerId);
  const current = getMonkeyStateAtRound(monkeyId, round);

  if (current.sold) {
    showToast("This monkey was already sold before this round.");
    return;
  }

  const nextUpgrade = getNextAvailableUpgrade(current.upgrade, tower);

  if (!nextUpgrade) {
    showToast("No legal auto-upgrade is available.");
    return;
  }

  state.events.push({
    id: makeId("event", state.nextEventNumber++),
    monkeyId,
    towerId: instance.towerId,
    round,
    type: "upgrade",
    upgrade: nextUpgrade,
    source: "manual",
    sortOrder: Date.now()
  });

  renderAll();
}

function wouldBreakTowerLimits(towerId) {
  const totalTowers = Object.keys(state.monkeyInstances).length;
  const tower = getTower(towerId);

  if (totalTowers >= state.settings.maxTowers) {
    return true;
  }

  if (
    tower.id === "banana-farm" &&
    countExistingTower("banana-farm") >= state.settings.maxBananaFarms
  ) {
    return true;
  }

  return false;
}

function makeMonkeyLabel(tower) {
  const currentCount = countExistingTower(tower.id) + 1;
  return `${tower.shortName || tower.name} #${currentCount}`;
}

function incrementTowerCount(towerId) {
  state.towerCounts[towerId] = (state.towerCounts[towerId] || 0) + 1;
}

function countExistingTower(towerId) {
  return Object.values(state.monkeyInstances)
    .filter(instance => instance.towerId === towerId)
    .length;
}

function getNextAvailableUpgrade(currentUpgrade, tower) {
  const paths = ["top", "middle", "bottom"];

  for (const path of paths) {
    if (!tower.paths[path]) continue;

    const next = addOneTier(currentUpgrade, path);

    if (next && isUpgradePatternAllowed(next)) {
      return next;
    }
  }

  return null;
}

function addOneTier(upgrade, path) {
  const digits = upgrade.split("").map(Number);
  const index = path === "top" ? 0 : path === "middle" ? 1 : 2;

  if (digits[index] >= 5) {
    return null;
  }

  digits[index] += 1;
  return digits.join("");
}

/*
  Simple BTD6-style path legality:
  - One main path can go past tier 2.
  - Only one other crosspath can go up to tier 2.
  - The third path must stay 0 if a path is tier 3+.
  You can loosen/tighten this later.
*/
function isUpgradePatternAllowed(upgrade) {
  const digits = upgrade.split("").map(Number);
  const pathsAboveTwo = digits.filter(value => value > 2).length;
  const nonZeroPaths = digits.filter(value => value > 0).length;

  if (pathsAboveTwo > 1) return false;
  if (pathsAboveTwo === 1 && nonZeroPaths > 2) return false;
  if (digits.some(value => value > 5)) return false;

  return true;
}

function isUpgradeMaxed(upgrade, tower) {
  return getNextAvailableUpgrade(upgrade, tower) === null;
}

function getMonkeyStateAtRound(monkeyId, round) {
  const relatedEvents = state.events
    .filter(event => event.monkeyId === monkeyId && event.round <= round)
    .sort((a, b) => {
      if (a.round !== b.round) return a.round - b.round;
      return a.sortOrder - b.sortOrder;
    });

  let upgrade = "000";
  let sold = false;

  relatedEvents.forEach(event => {
    if (event.type === "place") {
      upgrade = event.upgrade || "000";
      sold = false;
    }

    if (event.type === "upgrade") {
      upgrade = event.upgrade;
    }

    if (event.type === "sell") {
      sold = true;
    }
  });

  return { upgrade, sold };
}

function calculateRows() {
  const rows = [];
  let money = Number(state.settings.startingCash || 0);

  for (let round = 1; round <= state.endRound; round++) {
    const startMoney = money;

    const roundEvents = state.events
      .filter(event => event.round === round)
      .sort((a, b) => a.sortOrder - b.sortOrder);

    let moneyAfterActions = startMoney;
    let conflict = false;

    roundEvents.forEach(event => {
      const delta = getMoneyDeltaForEvent(event, round);

      moneyAfterActions += delta;

      if (moneyAfterActions < 0) {
        conflict = true;
      }
    });

    const baseRoundIncome = Number(window.BTD6_ROUND_INCOME?.[round] || 0);
    const towerIncome = calculateTowerIncomeForRound(round);
    const income = baseRoundIncome + towerIncome;

    const endMoney = moneyAfterActions + income;

    if (endMoney < 0) {
      conflict = true;
    }

    rows.push({
      round,
      startMoney,
      income,
      endMoney,
      conflict
    });

    money = endMoney;
  }

  return rows;
}

function getMoneyDeltaForEvent(event, round) {
  const tower = getTower(event.towerId);

  if (event.type === "place") {
    return -Number(tower.baseCost || 0);
  }

  if (event.type === "upgrade") {
    const cost = Number(tower.upgradeCosts?.[event.upgrade] || 0);
    return -cost;
  }

  if (event.type === "sell") {
    return calculateSellValue(event.monkeyId, round);
  }

  return 0;
}

function calculateSellValue(monkeyId, round) {
  const instance = state.monkeyInstances[monkeyId];
  if (!instance) return 0;

  const tower = getTower(instance.towerId);
  const stateBeforeSell = getMonkeyStateAtRound(monkeyId, round - 0.001);
  const totalSpent = calculateTotalSpentOnMonkeyUntilRound(monkeyId, round);
  return Math.floor(totalSpent * Number(tower.sellbackRate || 0.70));
}

function calculateTotalSpentOnMonkeyUntilRound(monkeyId, round) {
  return state.events
    .filter(event => event.monkeyId === monkeyId && event.round <= round && event.type !== "sell")
    .reduce((sum, event) => {
      const tower = getTower(event.towerId);

      if (event.type === "place") {
        return sum + Number(tower.baseCost || 0);
      }

      if (event.type === "upgrade") {
        return sum + Number(tower.upgradeCosts?.[event.upgrade] || 0);
      }

      return sum;
    }, 0);
}

/*
  THIS IS WHERE YOUR FARMING MATH GOES.

  Right now it returns 0 because this is only the UI/planning framework.

  Later, you can:
  - Look at every monkey alive by this round.
  - Check its current upgrade.
  - Add marketplace income, bank interest, boat farming, village effects, etc.
  - Return the total income generated this round.
*/
function calculateTowerIncomeForRound(round) {
  return 0;
}

/*
  THIS IS WHERE YOUR OPTIMIZER GOES.

  The Calculate button will:
  1. Remove old generated/purple actions.
  2. Keep user locked/grey actions.
  3. Call this function.
  4. Add whatever actions you return as generated/purple actions.

  Return format example:
  [
    { round: 3, towerId: "banana-farm", type: "place", upgrade: "000" },
    { round: 7, monkeyLabelHint: "Farm #1", type: "upgrade", upgrade: "100" }
  ]

  For now it returns [] so nothing is auto-added.
*/
function generateOptimalPlan() {
  return [];
}

function runCalculator() {
  state.events = state.events.filter(event => event.source !== "generated");

  const generated = generateOptimalPlan();

  generated.forEach(action => {
    // This is intentionally minimal. Once your math is ready,
    // you can expand this converter to create generated monkey events.
    console.log("Generated action placeholder:", action);
  });

  renderAll();
  showToast("Calculated current locked plan. Optimizer hook is ready in app.js.");
}

function renderCumulative() {
  el.cumulativeList.innerHTML = "";

  for (let round = 1; round <= state.endRound; round++) {
    const alive = Object.values(state.monkeyInstances)
      .map(instance => {
        const current = getMonkeyStateAtRound(instance.id, round);

        if (current.sold) return null;

        const tower = getTower(instance.towerId);

        return {
          label: instance.label,
          iconKey: tower.iconKey,
          upgrade: current.upgrade
        };
      })
      .filter(Boolean);

    const card = document.createElement("div");
    card.className = "cumulative-round";

    card.innerHTML = `
      <h3>Round ${round}</h3>
      <div class="cumulative-pill-list">
        ${
          alive.length
            ? alive.map(item => `
                <span class="action-chip generated">
                  ${iconHtml(item.iconKey)}
                  <span>${item.label}</span>
                  <span class="upgrade-code">${item.upgrade}</span>
                </span>
              `).join("")
            : `<span class="empty-inspector">No towers exist yet.</span>`
        }
      </div>
    `;

    el.cumulativeList.appendChild(card);
  }
}

window.selectEvent = function selectEvent(eventId) {
  state.selectedEventId = eventId;
  renderInspector();
  renderRoundTable();
};

function renderInspector() {
  const event = state.events.find(item => item.id === state.selectedEventId);

  if (!event) {
    el.inspectorContent.className = "empty-inspector";
    el.inspectorContent.innerHTML = "Click a monkey/action in the Round Map.";
    return;
  }

  const instance = state.monkeyInstances[event.monkeyId];
  const tower = getTower(event.towerId);

  el.inspectorContent.className = "inspector-grid";
  el.inspectorContent.innerHTML = `
    <div class="inspector-title">
      ${iconHtml(tower.iconKey)}
      ${instance.label}
    </div>

    <div class="card-meta">
      Round ${event.round} · ${event.type.toUpperCase()} · ${event.source === "generated" ? "Calculator generated" : "User locked"}
    </div>

    <label class="input-label">
      Upgrade code for this action
      <input id="selectedUpgradeInput" type="text" value="${event.upgrade || "000"}" maxlength="3" ${event.type === "sell" ? "disabled" : ""}>
    </label>

    <div class="inspector-actions">
      <button onclick="bumpSelectedUpgrade('top')">+Top</button>
      <button onclick="bumpSelectedUpgrade('middle')">+Mid</button>
      <button onclick="bumpSelectedUpgrade('bottom')">+Bot</button>
      <button class="good" onclick="turnSelectedIntoSell()">Sell Here</button>
      <button class="danger" onclick="deleteSelectedEvent()">Delete Action</button>
    </div>

    <div class="card-meta">
      Deleting a 000 placement removes the whole monkey. Deleting an upgrade only removes that upgrade,
      so later upgrades can become jumps like 000 → 002.
    </div>
  `;

  const input = document.getElementById("selectedUpgradeInput");
  input.addEventListener("change", eventInput => {
    const next = eventInput.target.value.trim();

    if (!/^[0-5]{3}$/.test(next) || !isUpgradePatternAllowed(next)) {
      showToast("Invalid upgrade code.");
      eventInput.target.value = event.upgrade || "000";
      return;
    }

    event.upgrade = next;
    if (event.type === "place" && next !== "000") {
      event.type = "upgrade";
    }

    renderAll();
  });
}

window.bumpSelectedUpgrade = function bumpSelectedUpgrade(path) {
  const event = state.events.find(item => item.id === state.selectedEventId);
  if (!event || event.type === "sell") return;

  const current = event.upgrade || "000";
  const next = addOneTier(current, path);

  if (!next || !isUpgradePatternAllowed(next)) {
    showToast("That upgrade would break the crosspath rules.");
    return;
  }

  event.upgrade = next;
  if (event.type === "place" && next !== "000") {
    event.type = "upgrade";
  }

  renderAll();
};

window.turnSelectedIntoSell = function turnSelectedIntoSell() {
  const event = state.events.find(item => item.id === state.selectedEventId);
  if (!event) return;

  event.type = "sell";
  event.upgrade = "";
  renderAll();
};

window.deleteSelectedEvent = function deleteSelectedEvent() {
  const event = state.events.find(item => item.id === state.selectedEventId);
  if (!event) return;

  if (event.type === "place" && event.upgrade === "000") {
    state.events = state.events.filter(item => item.monkeyId !== event.monkeyId);
    delete state.monkeyInstances[event.monkeyId];
  } else {
    state.events = state.events.filter(item => item.id !== event.id);
  }

  state.selectedEventId = null;
  renderAll();
};

function getTower(towerId) {
  return window.BTD6_TOWERS.find(tower => tower.id === towerId);
}

function makeId(prefix, number) {
  return `${prefix}-${number}`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatMoney(value) {
  const rounded = Math.round(Number(value || 0));
  return `$${rounded.toLocaleString()}`;
}

function showToast(message) {
  el.toast.textContent = message;
  el.toast.classList.remove("hidden");

  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    el.toast.classList.add("hidden");
  }, 2200);
}

init();
