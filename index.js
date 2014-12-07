var debug = require('debug')('hearthstone-card-cost');

// Generated using linear regression
var coeffs = {
    intercept: -0.358328
  , attack: 0.383402
  , health: 0.696036
  , battlecry: 0.256258
  , charge: 0.120012
  , divineShield: 0.9616326
  , stealth: 0.237890
  , windfury: 0.409731
};

var coeffNames = Object.keys(coeffs);

function predictCardCostReal(params) {
  var res = 0;

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
