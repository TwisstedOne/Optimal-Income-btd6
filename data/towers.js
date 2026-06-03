window.BTD6_HEROES = [
  {id:"none",name:"None",iconKey:"hero"},
  {id:"quincy",name:"Quincy",iconKey:"quincy",baseCost:540},
  {id:"gwendolin",name:"Gwendolin",iconKey:"gwendolin",baseCost:725},
  {id:"striker-jones",name:"Striker Jones",iconKey:"strikerJones",baseCost:700},
  {id:"obyn",name:"Obyn",iconKey:"obyn",baseCost:650},
  {id:"churchill",name:"Churchill",iconKey:"churchill",baseCost:2000},
  {id:"benjamin",name:"Benjamin",iconKey:"benjamin",baseCost:1200},
  {id:"ezili",name:"Ezili",iconKey:"ezili",baseCost:550},
  {id:"pat-fusty",name:"Pat Fusty",iconKey:"patFusty",baseCost:800},
  {id:"adora",name:"Adora",iconKey:"adora",baseCost:1000,specials:{adoraAbsorb:true}},
  {id:"brickell",name:"Brickell",iconKey:"brickell",baseCost:900},
  {id:"etienne",name:"Etienne",iconKey:"etienne",baseCost:650},
  {id:"sauda",name:"Sauda",iconKey:"sauda",baseCost:600},
  {id:"psi",name:"Psi",iconKey:"psi",baseCost:1000},
  {id:"geraldo",name:"Geraldo",iconKey:"geraldo",baseCost:750,specials:{geraldo:true}},
  {id:"corvus",name:"Corvus",iconKey:"corvus",baseCost:1325},
  {id:"rosalia",name:"Rosalia",iconKey:"rosalia",baseCost:875},
  {id:"silas",name:"Silas",iconKey:"silas",baseCost:850}
];

window.BTD6_GERALDO_ITEMS = [
  {id:"shooty-turret",name:"Shooty Turret",iconKey:"item",cost:250},
  {id:"fertilizer",name:"Fertilizer",iconKey:"bananaFarm",cost:300},
  {id:"glue-trap",name:"Glue Trap",iconKey:"item",cost:100},
  {id:"pickles",name:"Pickles",iconKey:"item",cost:200},
  {id:"paragon-totem",name:"Paragon Totem",iconKey:"paragon",cost:20000}
];

const DEFAULT_UPGRADE_COSTS = {"100":500,"200":1000,"300":4000,"400":12000,"500":45000,"010":500,"020":1000,"030":4000,"040":12000,"050":45000,"001":500,"002":1000,"003":4000,"004":12000,"005":45000};
const NO_UPGRADE_COSTS = {"500":45000,"050":45000,"005":45000};

window.BTD6_TOWERS = [
  {id:"dart-monkey",name:"Dart Monkey",shortName:"Dart",category:"Primary",iconKey:"dartMonkey",baseCost:200,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Apex Plasma Master",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 140, "200": 200, "300": 320, "400": 1800, "500": 15000, "010": 100, "020": 190, "030": 450, "040": 7200, "050": 45000,"001": 90, "002": 200, "003": 575, "004": 2050, "005": 21500},abilities:[]},
  {id:"boomerang",name:"Boomerang Monkey",shortName:"Boomerang",category:"Primary",iconKey:"boomerang",baseCost:315,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Glaive Dominus",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 200, "200": 280, "300": 600, "400": 2000, "500": 32500, "010": 175, "020": 250, "030": 1250, "040": 4200, "050": 35000,"001": 100, "002": 300, "003": 1300, "004": 2700, "005": 50000},abilities:[]},
  {id:"bomb-shooter",name:"Bomb Shooter",shortName:"Bomb",category:"Primary",iconKey:"bombShooter",baseCost:375,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Ballistic Obliteration Missile Bunker",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 250, "200": 650, "300": 1100, "400": 2800, "500": 55000, "010": 250, "020": 400, "030": 1000, "040": 3450, "050": 26000,"001": 200, "002": 300, "003": 700, "004": 2500, "005": 30000},abilities:[]},
  {id:"tack-shooter",name:"Tack Shooter",shortName:"Tack",category:"Primary",iconKey:"tackShooter",baseCost:260,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Cyclone of Fire and Metal",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 150, "200": 300, "300": 600, "400": 3500, "500": 45500, "010": 100, "020": 225, "030": 550, "040": 2700, "050": 15000,"001": 110, "002": 110, "003": 450, "004": 3200, "005": 20000},abilities:[]},
  {id:"ice-monkey",name:"Ice Monkey",shortName:"Ice",category:"Primary",iconKey:"iceMonkey",baseCost:400,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Herald of Everfrost",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 150, "200": 350, "300": 1500, "400": 2300, "500": 28000, "010": 200, "020": 300, "030": 2750, "040": 4000, "050": 21000,"001": 150, "002": 200, "003": 1900, "004": 2750, "005": 30000},abilities:[]},
  {id:"glue-gunner",name:"Glue Gunner",shortName:"Glue",category:"Primary",iconKey:"glueGunner",baseCost:225,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 200, "200": 300, "300": 2000, "400": 5000, "500": 22500, "010": 100, "020": 970, "030": 1950, "040": 4000, "050": 16000,"001": 280, "002": 400, "003": 3600, "004": 4000, "005": 24000},abilities:[]},
  {id:"desperado",name:"Desperado",shortName:"Desperado",category:"Primary",iconKey:"desperado",baseCost:300,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 200, "200": 200, "300": 1200, "400": 5800, "500": 16500, "010": 150, "020": 350, "030": 3000, "040": 6000, "050": 42000,"001": 220, "002": 280, "003": 2100, "004": 9500, "005": 31000},abilities:[]},
  {id:"sniper-monkey",name:"Sniper Monkey",shortName:"Sniper",category:"Military",iconKey:"sniperMonkey",baseCost:350,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 350, "200": 1300, "300": 2200, "400": 6300, "500": 32000, "010": 250, "020": 450, "030": 2100, "040": 7600, "050": 12000,"001": 450, "002": 450, "003": 2700, "004": 4100, "005": 14900},abilities:[{id:"supply-drop",name:"Use Supply Drop",minUpgrade:"040"}]},
  {id:"monkey-sub",name:"Monkey Sub",shortName:"Sub",category:"Military",iconKey:"monkeySub",baseCost:325,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Nautic Siege Core",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 130, "200": 500, "300": 700, "400": 2400, "500": 28000, "010": 450, "020": 300, "030": 1350, "040": 13000, "050": 29000,"001": 450, "002": 1000, "003": 1100, "004": 2500, "005": 25000},abilities:[]},
  {id:"monkey-buccaneer",name:"Monkey Buccaneer",shortName:"Buccaneer",category:"Military",iconKey:"boat",baseCost:400,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Navarch of the Seas",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 275, "200": 425, "300": 3350, "400": 8000, "500": 26000, "010": 550, "020": 500, "030": 900, "040": 3900, "050": 27000,"001": 200, "002": 350, "003": 2400, "004": 5500, "005": 23000},abilities:[]},
  {id:"monkey-ace",name:"Monkey Ace",shortName:"Ace",category:"Military",iconKey:"monkeyAce",baseCost:800,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Goliath Doomship",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 450, "200": 550, "300": 1000, "400": 3300, "500": 42500, "010": 200, "020": 350, "030": 900, "040": 16000, "050": 26000,"001": 500, "002": 550, "003": 2550, "004": 23400, "005": 90000},abilities:[]},
  {id:"heli-pilot",name:"Heli Pilot",shortName:"Heli",category:"Military",iconKey:"heliPilot",baseCost:1500,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 800, "200": 500, "300": 1850, "400": 19600, "500": 45000, "010": 300, "020": 600, "030": 3500, "040": 9500, "050": 30000,"001": 250, "002": 350, "003": 3400, "004": 8500, "005": 35000},abilities:[{id:"support-chinook",name:"Use Chinook",minUpgrade:"040"}]},
  {id:"mortar-monkey",name:"Mortar Monkey",shortName:"Mortar",category:"Military",iconKey:"mortarMonkey",baseCost:600,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 300, "200": 500, "300": 825, "400": 7000, "500": 36000, "010": 400, "020": 500, "030": 900, "040": 6500, "050": 38000,"001": 200, "002": 400, "003": 1100, "004": 9500, "005": 40000},abilities:[]},
  {id:"dartling-gunner",name:"Dartling Gunner",shortName:"Dartling",category:"Military",iconKey:"dartlingGunner",baseCost:850,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 300, "200": 900, "300": 3000, "400": 11750, "500": 75000, "010": 250, "020": 950, "030": 4500, "040": 5000, "050": 65000,"001": 150, "002": 1200, "003": 3000, "004": 12000, "005": 58000},abilities:[]},
  {id:"wizard-monkey",name:"Wizard Monkey",shortName:"Wizard",category:"Magic",iconKey:"wizardMonkey",baseCost:250,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Magus Perfectus",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 175, "200": 450, "300": 1450, "400": 10000, "500": 32000, "010": 300, "020": 800, "030": 3300, "040": 6000, "050": 50000,"001": 300, "002": 300, "003": 1500, "004": 2800, "005": 26500},abilities:[]},
  {id:"super-monkey",name:"Super Monkey",shortName:"Super",category:"Magic",iconKey:"superMonkey",baseCost:2500,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 2000, "200": 2500, "300": 20000, "400": 100000, "500": 500000, "010": 1500, "020": 1900, "030": 7500, "040": 25000, "050": 70000,"001": 3000, "002": 1200, "003": 5600, "004": 55555, "005": 165650},specials:{sunTempleAbsorbAt:"400",trueSunAbsorbAt:"500"}},
  {id:"ninja-monkey",name:"Ninja Monkey",shortName:"Ninja",category:"Magic",iconKey:"ninjaMonkey",baseCost:400,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Ascended Shadow",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 350, "200": 350, "300": 900, "400": 2750, "500": 35000, "010": 250, "020": 400, "030": 1200, "040": 5200, "050": 22000,"001": 300, "002": 450, "003": 2250, "004": 5000, "005": 40000},abilities:[]},
  {id:"alchemist",name:"Alchemist",shortName:"Alchemist",category:"Magic",iconKey:"alchemist",baseCost:550,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 250, "200": 350, "300": 1400, "400": 2850, "500": 48000, "010": 250, "020": 475, "030": 2800, "040": 4200, "050": 45000,"001": 650, "002": 450, "003": 1000, "004": 2750, "005": 40000},abilities:[]},
  {id:"druid",name:"Druid",shortName:"Druid",category:"Magic",iconKey:"druid",baseCost:400,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Root of All Nature",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 350, "200": 850, "300": 1700, "400": 4500, "500": 60000, "010": 250, "020": 350, "030": 1050, "040": 4900, "050": 35000,"001": 100, "002": 300, "003": 600, "004": 2350, "005": 45000},abilities:[]},
  {id:"mermonkey",name:"Mermonkey",shortName:"Mermonkey",category:"Magic",iconKey:"mermonkey",baseCost:300,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 150, "200": 250, "300": 1800, "400": 4200, "500": 23000, "010": 200, "020": 225, "030": 2000, "040": 8000, "050": 52000,"001": 200, "002": 280, "003": 2000, "004": 7600, "005": 25000},abilities:[]},
  {id:"banana-farm",name:"Banana Farm",shortName:"Farm",category:"Farm",iconKey:"bananaFarm",baseCost:1250,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 500, "200": 600, "300": 3000, "400": 19000, "500": 115000, "010": 300, "020": 800, "030": 3650, "040": 7200, "050": 100000,"001": 250, "002": 400, "003": 2700, "004": 15000, "005": 70000},abilities:[{id:"bank-loan",name:"Use Bank Ability",minUpgrade:"040"}],specials:{bankCollectAt:"030",bankDepositAt:"040"}},
  {id:"spike-factory",name:"Spike Factory",shortName:"Spike",category:"Support",iconKey:"spikeFactory",baseCost:1000,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Mega Massive Munitions Factory",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 800, "200": 600, "300": 2300, "400": 9500, "500": 125000, "010": 600, "020": 800, "030": 2500, "040": 7000, "050": 41000,"001": 150, "002": 400, "003": 1300, "004": 3600, "005": 30000},abilities:[]},
  {id:"monkey-village",name:"Monkey Village",shortName:"Village",category:"Support",iconKey:"village",baseCost:1200,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 400, "200": 1500, "300": 800, "400": 2500, "500": 25000, "010": 250, "020": 2000, "030": 7500, "040": 20000, "050": 40000,"001": 500, "002": 500, "003": 10000, "004": 3000, "005": 5000},specials:{absorbFarmsAt:"004"}},
  {id:"engineer-monkey",name:"Engineer Monkey",shortName:"Engineer",category:"Support",iconKey:"engineerMonkey",baseCost:350,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Master Builder",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 500, "200": 400, "300": 575, "400": 2500, "500": 32000, "010": 250, "020": 350, "030": 900, "040": 13500, "050": 72000,"001": 450, "002": 220, "003": 450, "004": 3600, "005": 45000},abilities:[{id:"overclock",name:"Use Overclock",minUpgrade:"040"}]},
  {id:"beast-handler",name:"Beast Handler",shortName:"Beast",category:"Support",iconKey:"beastHandler",baseCost:250,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100": 160, "200": 810, "300": 2010, "400": 12500, "500": 45000, "010": 175, "020": 830, "030": 2065, "040": 9500, "050": 60000,"001": 190, "002": 860, "003": 2120, "004": 9000, "005": 30000},abilities:[]}
];























