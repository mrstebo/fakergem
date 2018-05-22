export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export function itemFromCollection(collection) {
  return collection[randomNumber(0, collection.length - 1)];
}
