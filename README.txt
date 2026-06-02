OptimalBtd6 Framework v2

Important v2 changes:
- Starting Lives is now Round Start.
- Selected Action is separated from Available / Existing / Rules.
- Round map scroll final row fix.
- Base 000 placements cannot be edited into upgrades.
- Available towers are image + price only.
- Top website header added: OptimalBtd6.
- Actions now get a computed tick from 0 to 1260.
- Purchases auto-snap to earliest affordable tick.
- Same-round buy/sell no longer passes just because net cost is 0.
- Upgrade editor now uses stacked +/- controls.
- Selected Action has an MK Buffs tab.
- Actions are displayed sorted by tick.
- Availability uses max path tiers, default 5/5/5.
- End round is clamped to 140.

Math hooks:
- app.js -> calculateTowerIncomeForRound(round)
- app.js -> generateOptimalPlan()

Images:
- Put files in assets/icons or assets/towers.
- Edit data/images.js, e.g. bananaFarm: { src: "assets/towers/banana-farm.png", fallback: "🍌" }
