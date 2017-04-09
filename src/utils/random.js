export function randomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min));
}

export function randomFloat(min, max) {
  return min + Math.random() * (max - min);
}

export function itemFromCollection(collection) {
  return collection[randomNumber(0, collection.length)];
}
