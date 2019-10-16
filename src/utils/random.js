const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomFloat = (min, max) => {
  return Math.random() * (max - min) + min;
};

const itemFromCollection = (collection) => {
  return collection[randomNumber(0, collection.length - 1)];
};

module.exports = {
  randomNumber,
  randomFloat,
  itemFromCollection,
};
