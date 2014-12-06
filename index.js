
// Generated using linear regression
var coeffs = {
  intercept: -1 // -0.67393
, attack: 0.58905
, health: 0.51059
, rarityCommon: 0.49327
, rarityEpic: 1.52961
, rarityLegendary: 0.65615
, rarityRare: 0.66752
, battlecry: -0.27042
, charge: 0.40007
, combo: 0.74518
, deathrattle: -0.14795
, divineShield: 1.47752
, enrage: 0.08269
, freeze: 0.95288
, poisonous: 0.70328
, spellpower: 0.85202
, stealth: 0.20041
, taunt: -0.04301
, windfury: 1.11831
, playerClassDream: -1.56027
, playerClassDruid: 0.19678
, playerClassHunter: 0.37881
, playerClassMage: -0.65493
, playerClassPaladin: -0.03623
, playerClassPriest: -0.15468
, playerClassRogue: -0.45151
, playerClassShaman: -1.23832
, playerClassWarlock: 0.62460
, playerClassWarrior: 0.22969
, raceBeast: -0.52559
, raceDemon: -1.13273
, raceDragon: -0.03860
, raceMurloc: -0.02847
, racePirate: -0.17158
, raceTotem: 2.71297
};

var coeffNames = Object.keys(coeffs);

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function setPrefix(obj, types, prefix, val) {
  var fields = types.map(function(type){
    return prefix + capitalize(type);
  });

  fields.forEach(function(field) {
    obj[field] = 0;
  });

  types.forEach(function(type, i) {
    if (val === type)
      obj[fields[i]] = 1;
  });
}

var rarities = ['common', 'epic', 'legendary', 'rare'];
var races = ['beast', 'demon', 'dragon', 'murloc', 'pirate', 'totem'];
var classes = ['shaman', 'warlock', 'warrior', 'rogue', 'priest', 'paladin',
 'mage', 'hunter', 'driud', 'dream'];

function predictCardCostReal(params) {
  var res = 0;

  params.rarity = params.rarity || "common";

  if (params.rarity)
    setPrefix(params, rarities, 'rarity', params.rarity);

  if (params.race)
    setPrefix(params, races, 'race', params.race);

  if (params.playerClass)
    setPrefix(params, classes, 'playerClass', params.playerClass);

  params.intercept = 1;

  for (var i = 0, len = coeffNames.length; i < len; i++) {
    var name = coeffNames[i];
    res += (params[name] || 0) * coeffs[name];
  }

  return res;
}

function predictCardCost(params) {
  return Math.round(predictCardCostReal(params));
}

module.exports = predictCardCost;
module.exports.real = predictCardCostReal;
