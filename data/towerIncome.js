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
 * - tick: the in-round tick where the income arrives, e.g. 340.
 * - amount: the cash gained at that tick.
 * - fromRound / toRound: optional inclusive round range.
 * - rounds: optional explicit round list, e.g. [20, 21, 22].
 * - label: optional chip label shown on the round map.
 *
 * Example:
 * { towerId: "banana-farm", minUpgrade: "200", tick: 340, amount: 120, label: "Farm bananas" }
 */
window.BTD6_TOWER_INCOME_VALUES = [
    {towerId: "banana-farm", exactUpgrade: "000", tick: 0, amount: 120, label: "Farm bananas"}
];
