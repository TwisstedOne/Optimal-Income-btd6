window.BTD6_HEROES = [
  {id:"none",name:"None",iconKey:"hero"},
  {id:"quincy",name:"Quincy",iconKey:"quincy",baseCost:540},
  {id:"gwendolin",name:"Gwendolin",iconKey:"gwendolin",baseCost:900},
  {id:"striker-jones",name:"Striker Jones",iconKey:"strikerJones",baseCost:750},
  {id:"obyn",name:"Obyn",iconKey:"obyn",baseCost:650},
  {id:"churchill",name:"Churchill",iconKey:"churchill",baseCost:2000},
  {id:"benjamin",name:"Benjamin",iconKey:"benjamin",baseCost:1200},
  {id:"ezili",name:"Ezili",iconKey:"ezili",baseCost:600},
  {id:"pat-fusty",name:"Pat Fusty",iconKey:"patFusty",baseCost:800},
  {id:"adora",name:"Adora",iconKey:"adora",baseCost:1000,specials:{adoraAbsorb:true}},
  {id:"brickell",name:"Brickell",iconKey:"brickell",baseCost:750},
  {id:"etienne",name:"Etienne",iconKey:"etienne",baseCost:850},
  {id:"sauda",name:"Sauda",iconKey:"sauda",baseCost:600},
  {id:"psi",name:"Psi",iconKey:"psi",baseCost:1000},
  {id:"geraldo",name:"Geraldo",iconKey:"geraldo",baseCost:700,specials:{geraldo:true}},
  {id:"corvus",name:"Corvus",iconKey:"corvus",baseCost:925},
  {id:"rosalia",name:"Rosalia",iconKey:"rosalia",baseCost:875},
  {id:"silas",name:"Silas",iconKey:"silas",baseCost:1000}
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
  {id:"dart-monkey",name:"Dart Monkey",shortName:"Dart",category:"Primary",iconKey:"dartMonkey",baseCost:215,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Apex Plasma Master",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS,"500":150000,"050":40000,"005":23500},abilities:[]},
  {id:"boomerang",name:"Boomerang Monkey",shortName:"Boomerang",category:"Primary",iconKey:"boomerang",baseCost:325,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Glaive Dominus",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS,"500":32000,"050":42000,"005":55000},abilities:[{id:"turbo-charge",name:"Use Turbo Charge",minUpgrade:"040"}]},
  {id:"bomb-shooter",name:"Bomb Shooter",shortName:"Bomb",category:"Primary",iconKey:"bombShooter",baseCost:525,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Mega Massive Munitions Factory",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[{id:"moab-assassin",name:"Use MOAB Assassin",minUpgrade:"040"}]},
  {id:"tack-shooter",name:"Tack Shooter",shortName:"Tack",category:"Primary",iconKey:"tackShooter",baseCost:280,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Cyclone of Fire and Metal",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[]},
  {id:"ice-monkey",name:"Ice Monkey",shortName:"Ice",category:"Primary",iconKey:"iceMonkey",baseCost:500,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Herald of Everfrost",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[]},
  {id:"glue-gunner",name:"Glue Gunner",shortName:"Glue",category:"Primary",iconKey:"glueGunner",baseCost:275,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[{id:"glue-strike",name:"Use Glue Strike",minUpgrade:"040"}]},
  {id:"desperado",name:"Desperado",shortName:"Desperado",category:"Primary",iconKey:"desperado",baseCost:650,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[]},
  {id:"sniper-monkey",name:"Sniper Monkey",shortName:"Sniper",category:"Military",iconKey:"sniperMonkey",baseCost:350,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[{id:"supply-drop",name:"Use Supply Drop",minUpgrade:"040"}]},
  {id:"monkey-sub",name:"Monkey Sub",shortName:"Sub",category:"Military",iconKey:"monkeySub",baseCost:325,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Nautic Siege Core",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[{id:"first-strike",name:"Use First Strike",minUpgrade:"040"}]},
  {id:"monkey-buccaneer",name:"Monkey Buccaneer",shortName:"Buccaneer",category:"Military",iconKey:"boat",baseCost:500,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Navarch of the Seas",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS,"050":21000,"005":25000},abilities:[{id:"boat-hook",name:"Use Boat Ability",minUpgrade:"040"}]},
  {id:"monkey-ace",name:"Monkey Ace",shortName:"Ace",category:"Military",iconKey:"monkeyAce",baseCost:800,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Goliath Doomship",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[{id:"ground-zero",name:"Use Ground Zero",minUpgrade:"040"}]},
  {id:"heli-pilot",name:"Heli Pilot",shortName:"Heli",category:"Military",iconKey:"heliPilot",baseCost:1600,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[{id:"support-chinook",name:"Use Chinook",minUpgrade:"040"}]},
  {id:"mortar-monkey",name:"Mortar Monkey",shortName:"Mortar",category:"Military",iconKey:"mortarMonkey",baseCost:750,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[{id:"artillery-battery",name:"Use Artillery Battery",minUpgrade:"040"}]},
  {id:"dartling-gunner",name:"Dartling Gunner",shortName:"Dartling",category:"Military",iconKey:"dartlingGunner",baseCost:850,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[{id:"rocket-storm",name:"Use Rocket Storm",minUpgrade:"040"}]},
  {id:"wizard-monkey",name:"Wizard Monkey",shortName:"Wizard",category:"Magic",iconKey:"wizardMonkey",baseCost:375,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Magus Perfectus",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[{id:"phoenix",name:"Use Phoenix",minUpgrade:"040"}]},
  {id:"super-monkey",name:"Super Monkey",shortName:"Super",category:"Magic",iconKey:"superMonkey",baseCost:2500,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS,"300":20000,"400":100000,"500":500000},specials:{sunTempleAbsorbAt:"400",trueSunAbsorbAt:"500"}},
  {id:"ninja-monkey",name:"Ninja Monkey",shortName:"Ninja",category:"Magic",iconKey:"ninjaMonkey",baseCost:500,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Ascended Shadow",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[]},
  {id:"alchemist",name:"Alchemist",shortName:"Alchemist",category:"Magic",iconKey:"alchemist",baseCost:550,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[]},
  {id:"druid",name:"Druid",shortName:"Druid",category:"Magic",iconKey:"druid",baseCost:400,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Root of All Nature",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[{id:"jungle-bounty",name:"Use Jungle Bounty",minUpgrade:"040"}]},
  {id:"mermonkey",name:"Mermonkey",shortName:"Mermonkey",category:"Magic",iconKey:"mermonkey",baseCost:475,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[]},
  {id:"banana-farm",name:"Banana Farm",shortName:"Farm",category:"Farm",iconKey:"bananaFarm",baseCost:1250,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100":500,"200":600,"300":3000,"400":19000,"500":100000,"010":300,"020":800,"030":3500,"040":7500,"050":100000,"001":250,"002":400,"003":2900,"004":20000,"005":70000},abilities:[{id:"bank-loan",name:"Use Bank Ability",minUpgrade:"040"}],specials:{bankCollectAt:"030",bankDepositAt:"040"}},
  {id:"spike-factory",name:"Spike Factory",shortName:"Spike",category:"Support",iconKey:"spikeFactory",baseCost:1000,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Ballistic Obliteration Missile Bunker",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[{id:"carpet-spikes",name:"Use Carpet Spikes",minUpgrade:"040"}]},
  {id:"monkey-village",name:"Monkey Village",shortName:"Village",category:"Support",iconKey:"village",baseCost:1200,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS,"001":500,"002":500,"003":10000,"004":20000,"005":50000},specials:{absorbFarmsAt:"004"}},
  {id:"engineer-monkey",name:"Engineer Monkey",shortName:"Engineer",category:"Support",iconKey:"engineerMonkey",baseCost:400,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Master Builder",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[{id:"overclock",name:"Use Overclock",minUpgrade:"040"}]},
  {id:"beast-handler",name:"Beast Handler",shortName:"Beast",category:"Support",iconKey:"beastHandler",baseCost:250,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{...DEFAULT_UPGRADE_COSTS},abilities:[]}
];
