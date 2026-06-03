OptimalBtd6 Framework v3

This version adds the larger simulator framework requested:
- Editable action tick from 0 to 100 with slider + manual number input.
- Rules sanitization: disabling a tower removes instances; lowering path limits clamps existing upgrades.
- Goal explanation text.
- Separate special actions for bank collect/deposit, absorbs, abilities, hero level skip, paragon creation, and pop-income timing.
- Cumulative view selections are read-only but inspectable.
- Geraldo goodies appear only when Geraldo is selected.
- Moving Round Start removes earlier actions/towers.
- Marketplace Tick removed; Action Tick is used instead.
- Paragon creation hook and absorbed metadata/marking.
- T5 duplicate limit based on # Players, with dart bottom-path exception for MK/Silas.
- Calculate button adds an editable generated 000 farm at the starting round for testing.
- Heroes appear in Available/Existing and use hero-specific actions.
- Map difficulty option.
- Lord of the Abyss option.
- Pop Income helper action.
- Tutorial overlay on every page load.

Math is still intentionally stubbed. Add real BTD6 formulas in js/app.js:
- calculateEndRoundTowerIncome(round)
- getMoneyDelta(event, round) for exact bank/ability/paragon costs
- runCalculator() for your real optimizer
