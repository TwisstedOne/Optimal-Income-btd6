window.BTD6_HEROES = [
  {id:"none",name:"None",iconKey:"hero"},
  {id:"quincy",name:"Quincy",iconKey:"hero",baseCost:540},
  {id:"gwendolin",name:"Gwendolin",iconKey:"hero",baseCost:900},
  {id:"benjamin",name:"Benjamin",iconKey:"hero",baseCost:1200},
  {id:"adora",name:"Adora",iconKey:"adora",baseCost:1000,specials:{adoraAbsorb:true}},
  {id:"geraldo",name:"Geraldo",iconKey:"geraldo",baseCost:700,specials:{geraldo:true}},
  {id:"silas",name:"Silas",iconKey:"hero",baseCost:1000}
];

window.BTD6_GERALDO_ITEMS = [
  {id:"shooty-turret",name:"Shooty Turret",iconKey:"item",cost:250},
  {id:"fertilizer",name:"Fertilizer",iconKey:"bananaFarm",cost:300},
  {id:"glue-trap",name:"Glue Trap",iconKey:"item",cost:100},
  {id:"pickles",name:"Pickles",iconKey:"item",cost:200},
  {id:"paragon-totem",name:"Paragon Totem",iconKey:"paragon",cost:20000}
];

window.BTD6_TOWERS = [
  {id:"banana-farm",name:"Banana Farm",shortName:"Farm",category:"Farm",iconKey:"bananaFarm",baseCost:1250,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"100":500,"200":600,"300":3000,"400":19000,"500":100000,"010":300,"020":800,"030":3500,"040":7500,"050":100000,"001":250,"002":400,"003":2900,"004":20000,"005":70000},abilities:[{id:"bank-loan",name:"Use Bank Ability",minUpgrade:"040"}],specials:{bankCollectAt:"030",bankDepositAt:"040"}},
  {id:"monkey-village",name:"Monkey Village",shortName:"Village",category:"Support",iconKey:"village",baseCost:1200,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"001":500,"002":500,"003":10000,"004":20000,"005":50000},specials:{absorbFarmsAt:"004"}},
  {id:"dart-monkey",name:"Dart Monkey",shortName:"Dart",category:"Primary",iconKey:"dartMonkey",baseCost:215,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Apex Plasma Master",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"500":150000,"050":40000,"005":23500},abilities:[]},
  {id:"boomerang",name:"Boomerang Monkey",shortName:"Boomerang",category:"Primary",iconKey:"boomerang",baseCost:325,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Glaive Dominus",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"500":32000,"050":42000,"005":55000},abilities:[{id:"turbo-charge",name:"Use Turbo Charge",minUpgrade:"040"}]},
  {id:"monkey-buccaneer",name:"Monkey Buccaneer",shortName:"Boat",category:"Military",iconKey:"boat",baseCost:500,sellbackRate:.70,enabled:true,paragonAvailable:true,paragonName:"Navarch",maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"050":21000,"005":25000},abilities:[{id:"boat-hook",name:"Use Boat Ability",minUpgrade:"040"}]},
  {id:"super-monkey",name:"Super Monkey",shortName:"Super",category:"Magic",iconKey:"superMonkey",baseCost:2500,sellbackRate:.70,enabled:true,paragonAvailable:false,maxPathTiers:{top:5,middle:5,bottom:5},upgradeCosts:{"300":20000,"400":100000,"500":500000},specials:{sunTempleAbsorbAt:"400",trueSunAbsorbAt:"500"}}
];
