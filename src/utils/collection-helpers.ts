import { between } from './number-helpers';

export function shuffle(collection: Array<any>): Array<any> {
  let index = -1;
  let length = collection.length;
  let result = Array(length);
  while (++index < length) {
    let rand = between(0, index);
    result[index] = result[rand];
    result[rand] = collection[index];
  }
  return result;
}

export function pickOne<T>(collection: Array<T> | string): T | string {
  const index = between(0, collection.length - 1);
  return collection[index];
}
