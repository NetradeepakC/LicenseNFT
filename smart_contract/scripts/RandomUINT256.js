const BigNumber = require('bignumber.js');
exports.getRandom = function() {
    BigNumber.config({ROUNDING_MODE: BigNumber.ROUND_FLOOR});
    rand=BigNumber(2);
    rand = rand.exponentiatedBy(256);
    rand = rand.multipliedBy(Math.random());
    return rand;
}