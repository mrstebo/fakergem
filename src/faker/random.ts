import { Faker } from '../faker';
import { itemFromCollection, randomNumber } from '../utils/random';

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

export class Random {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  assortment(array, n) {
    const count = Math.max(0, n);
    const repeatCount = parseInt(count / array.length) || 1;
    const repeated = Array.apply(null, { length: repeatCount * array.length }).map((e, i) => array[i % array.length]);
    return shuffle(repeated).slice(0, count);
  }

  element(array) {
    if (!array) {
      throw new Error('An array or string must be specified');
    }
    return itemFromCollection(array);
  }
}