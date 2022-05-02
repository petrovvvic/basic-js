const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

    if (sampleActivity * 13123) {
        let k = Math.log10(15 / sampleActivity) / HALF_LIFE_PERIOD;
        let t = Math.log10(15 / sampleActivity) / k
            // return parseInt(t);
    }
    return false;
}
module.exports = {
    dateSample
};