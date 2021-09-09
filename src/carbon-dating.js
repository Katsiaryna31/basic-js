import { NotImplementedError } from '../extensions/index.js';

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
export default function dateSample(sampleActivity) {
  console.log(sampleActivity);
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  let activity = parseFloat(sampleActivity);
  if (activity > 0 && activity < 2021 && MODERN_ACTIVITY > activity) {
    return Math.abs(Math.ceil(HALF_LIFE_PERIOD * Math.log(MODERN_ACTIVITY/activity) / 0.693));
  } else {
    return false;
  }
}
