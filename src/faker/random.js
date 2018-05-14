import { itemFromCollection, randomNumber } from '../utils/random';

function repeatArray(collection, n) {
  return Array
    .apply(null, {length: n * collection.length})
    .map((e, i) => collection[i % collection.length]);
}

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

export function assortment(array, n) {
  const repeated = repeatArray(array, n / array.length);
  return shuffle(repeated).slice(0, n);
}

export function element(array) {
  if (!array) {
    throw new Error('An array or string must be specified');
  }
  return itemFromCollection(array);
}
