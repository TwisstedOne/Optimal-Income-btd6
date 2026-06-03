/*
 * Timed tower-income data.
 *
 * Add farm, boat, village, ability, or other generated income here when you want
 * the planner to award money at a specific round tick instead of only at the end
 * of the round. Each entry is applied once per matching live tower each round.
 *
 * Fields:
 * - towerId: the id from data/towers.js, for example "banana-farm" or "monkey-buccaneer".
 * - minUpgrade: optional upgrade threshold. "003" matches 003, 004, 005, 023, etc.
 * - exactUpgrade: optional exact upgrade code. Use this instead of minUpgrade for one specific crosspath.
 * - tick / ticks: the in-round tick(s) where the income arrives, e.g. 340 or [0, 420, 840].
 * - amount / amounts: the cash gained at each tick. If amount is a number, it is reused for every tick.
 * - endIncome: optional true value that adds the amount at end-of-round instead of creating a timed action.
 * - fromRound / toRound: optional inclusive round range.
 * - rounds: optional explicit round list, e.g. [20, 21, 22].
 *
 * Examples:
 * { towerId: "banana-farm", minUpgrade: "200", ticks: [340, 680, 1020], amount: 40 }
 * { towerId: "monkey-buccaneer", minUpgrade: "003", endIncome: true, amount: 200 }
 */
window.BTD6_TOWER_INCOME_VALUES = [
    {towerId: "banana-farm", exactUpgrade: "000", ticks: [0, 420, 840, 1260], amount: 120}
];
