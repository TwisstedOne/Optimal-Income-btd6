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
 * - tick / ticks: the in-round tick(s) where the income arrives, e.g. 27 or [0, 33, 67].
 * - amount / amounts: the cash gained at each tick. If amount is a number, it is reused for every tick.
 * - endIncome: optional true value that adds the amount at end-of-round instead of creating a timed action.
 * - fromRound / toRound: optional inclusive round range.
 * - rounds: optional explicit round list, e.g. [20, 21, 22].
 *
 * Examples:
 * { towerId: "banana-farm", minUpgrade: "200", ticks: [27, 54, 81], amount: 40 }
 * { towerId: "monkey-buccaneer", minUpgrade: "003", endIncome: true, amount: 200 }
 */
window.BTD6_TOWER_INCOME_VALUES = [
    {towerId: "banana-farm", exactUpgrade: "000", ticks: [0, 33, 67, 100], amount: 20},

    {towerId: "banana-farm", exactUpgrade: "100", ticks: [0, 20, 40, 60, 80, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "200", ticks: [0, 14, 28, 43, 57, 71, 85, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "300", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "400", ticks: [0, 25, 50, 75, 100], amount: 300},
    {towerId: "banana-farm", exactUpgrade: "500", ticks: [0, 25, 50, 75, 100], amount: 1200},

    {towerId: "banana-farm", exactUpgrade: "110", ticks: [0, 20, 40, 60, 80, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "210", ticks: [0, 14, 28, 43, 57, 71, 85, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "310", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "410", ticks: [0, 25, 50, 75, 100], amount: 300},
    {towerId: "banana-farm", exactUpgrade: "510", ticks: [0, 25, 50, 75, 100], amount: 1200},   

    {towerId: "banana-farm", exactUpgrade: "120", ticks: [0, 20, 40, 60, 80, 100], amount: 25},
    {towerId: "banana-farm", exactUpgrade: "220", ticks: [0, 14, 28, 43, 57, 71, 85, 100], amount: 25},
    {towerId: "banana-farm", exactUpgrade: "320", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 25},
    {towerId: "banana-farm", exactUpgrade: "420", ticks: [0, 25, 50, 75, 100], amount: 375},
    {towerId: "banana-farm", exactUpgrade: "520", ticks: [0, 25, 50, 75, 100], amount: 1500},

    {towerId: "banana-farm", exactUpgrade: "101", ticks: [0, 20, 40, 60, 80, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "201", ticks: [0, 14, 28, 43, 57, 71, 85, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "301", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "401", ticks: [0, 25, 50, 75, 100], amount: 300},
    {towerId: "banana-farm", exactUpgrade: "501", ticks: [0, 25, 50, 75, 100], amount: 1200},

    {towerId: "banana-farm", exactUpgrade: "102", ticks: [0, 20, 40, 60, 80, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "202", ticks: [0, 14, 28, 43, 57, 71, 85, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "302", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "402", ticks: [0, 25, 50, 75, 100], amount: 300},
    {towerId: "banana-farm", exactUpgrade: "502", ticks: [0, 25, 50, 75, 100], amount: 1200},



    {towerId: "banana-farm", exactUpgrade: "010", ticks: [0, 33, 67, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "020", ticks: [0, 33, 67, 100], amount: 25},
    {towerId: "banana-farm", exactUpgrade: "030", ticks: [0, 33, 67, 100], amount: 56.25},
    {towerId: "banana-farm", exactUpgrade: "040", ticks: [0, 33, 67, 100], amount: 56.25},
    {towerId: "banana-farm", exactUpgrade: "050", ticks: [0, 33, 67, 100], amount: 56.25},
    
    {towerId: "banana-farm", exactUpgrade: "130", ticks: [0, 20, 40, 60, 80, 100], amount: 56.25},
    {towerId: "banana-farm", exactUpgrade: "140", ticks: [0, 20, 40, 60, 80, 100], amount: 56.25},
    {towerId: "banana-farm", exactUpgrade: "150", ticks: [0, 20, 40, 60, 80, 100], amount: 56.25},

    {towerId: "banana-farm", exactUpgrade: "230", ticks: [0, 14, 28, 43, 57, 71, 85, 100], amount: 56.25},
    {towerId: "banana-farm", exactUpgrade: "240", ticks: [0, 14, 28, 43, 57, 71, 85, 100], amount: 56.25},
    {towerId: "banana-farm", exactUpgrade: "250", ticks: [0, 14, 28, 43, 57, 71, 85, 100], amount: 56.25},

    {towerId: "banana-farm", exactUpgrade: "011", ticks: [0, 33, 67, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "021", ticks: [0, 33, 67, 100], amount: 25},
    {towerId: "banana-farm", exactUpgrade: "031", ticks: [0, 33, 67, 100], amount: 56.25},
    {towerId: "banana-farm", exactUpgrade: "041", ticks: [0, 33, 67, 100], amount: 56.25},
    {towerId: "banana-farm", exactUpgrade: "051", ticks: [0, 33, 67, 100], amount: 56.25},

    {towerId: "banana-farm", exactUpgrade: "012", ticks: [0, 33, 67, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "022", ticks: [0, 33, 67, 100], amount: 25},
    {towerId: "banana-farm", exactUpgrade: "032", ticks: [0, 33, 67, 100], amount: 56.25},
    {towerId: "banana-farm", exactUpgrade: "042", ticks: [0, 33, 67, 100], amount: 56.25},
    {towerId: "banana-farm", exactUpgrade: "052", ticks: [0, 33, 67, 100], amount: 56.25},



    {towerId: "banana-farm", exactUpgrade: "001", ticks: [0, 33, 67, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "002", ticks: [0, 33, 67, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "003", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "004", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 70},
    {towerId: "banana-farm", exactUpgrade: "005", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 70},
    {towerId: "banana-farm", exactUpgrade: "005", endIncome: true, amount: 4000},

    {towerId: "banana-farm", exactUpgrade: "103", ticks: [0, 6, 12, 18, 24, 29, 35, 41, 47, 53, 59, 65, 71, 76, 82, 88, 94, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "104", ticks: [0, 6, 12, 18, 24, 29, 35, 41, 47, 53, 59, 65, 71, 76, 82, 88, 94, 100], amount: 70},
    {towerId: "banana-farm", exactUpgrade: "105", ticks: [0, 6, 12, 18, 24, 29, 35, 41, 47, 53, 59, 65, 71, 76, 82, 88, 94, 100], amount: 70},
    {towerId: "banana-farm", exactUpgrade: "105", endIncome: true, amount: 4000},

    {towerId: "banana-farm", exactUpgrade: "203", ticks: [0, 5, 11, 16, 21, 26, 32, 37, 42, 47, 53, 58, 63, 68, 74, 79, 84, 89, 95, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "204", ticks: [0, 5, 11, 16, 21, 26, 32, 37, 42, 47, 53, 58, 63, 68, 74, 79, 84, 89, 95, 100], amount: 70},
    {towerId: "banana-farm", exactUpgrade: "205", ticks: [0, 5, 11, 16, 21, 26, 32, 37, 42, 47, 53, 58, 63, 68, 74, 79, 84, 89, 95, 100], amount: 70},
    {towerId: "banana-farm", exactUpgrade: "205", endIncome: true, amount: 4000},

    {towerId: "banana-farm", exactUpgrade: "013", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 20},
    {towerId: "banana-farm", exactUpgrade: "014", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 70},
    {towerId: "banana-farm", exactUpgrade: "015", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 70},
    {towerId: "banana-farm", exactUpgrade: "015", endIncome: true, amount: 4000},

    {towerId: "banana-farm", exactUpgrade: "023", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 25},
    {towerId: "banana-farm", exactUpgrade: "024", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 87.5},
    {towerId: "banana-farm", exactUpgrade: "025", ticks: [0, 7, 13, 20, 27, 33, 40, 47, 53, 60, 67, 73, 80, 87, 93, 100], amount: 87.5},
    {towerId: "banana-farm", exactUpgrade: "025", endIncome: true, amount: 4000},



    {towerId: "monkey-buccaneer", exactUpgrade: "003", endIncome: true, amount: 200},
    {towerId: "monkey-buccaneer", exactUpgrade: "004", endIncome: true, amount: 500},
    {towerId: "monkey-buccaneer", exactUpgrade: "005", endIncome: true, amount: 800},

    {towerId: "monkey-buccaneer", exactUpgrade: "103", endIncome: true, amount: 200},
    {towerId: "monkey-buccaneer", exactUpgrade: "104", endIncome: true, amount: 500},
    {towerId: "monkey-buccaneer", exactUpgrade: "105", endIncome: true, amount: 800},

    {towerId: "monkey-buccaneer", exactUpgrade: "203", endIncome: true, amount: 200},
    {towerId: "monkey-buccaneer", exactUpgrade: "204", endIncome: true, amount: 500},
    {towerId: "monkey-buccaneer", exactUpgrade: "205", endIncome: true, amount: 800},

    {towerId: "monkey-buccaneer", exactUpgrade: "013", endIncome: true, amount: 200},
    {towerId: "monkey-buccaneer", exactUpgrade: "014", endIncome: true, amount: 500},
    {towerId: "monkey-buccaneer", exactUpgrade: "015", endIncome: true, amount: 800},

    {towerId: "monkey-buccaneer", exactUpgrade: "023", endIncome: true, amount: 200},
    {towerId: "monkey-buccaneer", exactUpgrade: "024", endIncome: true, amount: 500},
    {towerId: "monkey-buccaneer", exactUpgrade: "025", endIncome: true, amount: 800},
];
