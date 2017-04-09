export function number(min, max) {
  return min + Math.floor(Math.random() * (max - min))
}

export function itemFromCollection(collection) {
  return collection[number(0, collection.length)];
}
