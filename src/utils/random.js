/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const randomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
};

/**
 * @param {any[]} collection
 * @returns {any}
 */
const itemFromCollection = (collection) => {
  return collection[randomNumber(0, collection.length - 1)];
};

module.exports = {
  randomNumber,
  randomFloat,
  itemFromCollection,
};
