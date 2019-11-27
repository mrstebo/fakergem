const { itemFromCollection, randomNumber } = require("../utils/random");

function shuffle(collection) {
  let index = -1;
  let length = collection.length;
  let result = Array(length);
  while (++index < length) {
    let rand = randomNumber(0, index);
    result[index] = result[rand];
    result[rand] = collection[index];
  }
  return result;
}

function Random() {

  /**
   *
   * @param {any[]} array
   * @param {number} n
   * @returns {any}
   */
  this.assortment = function(array, n) {
    const count = Math.max(0, n);
    const repeatCount = parseInt(count / array.length) || 1;
    const repeated = Array
      .apply(null, { length: repeatCount * array.length })
      .map((_, i) => array[i % array.length]);
    return shuffle(repeated).slice(0, count);
  };

  /**
   *
   * @param {string | any[]} array
   * @returns {any}
   */
  this.element = function(array) {
    if (!array) {
      throw new Error("An array or string must be specified");
    }
    return itemFromCollection(array);
  };

}

module.exports = Random;
