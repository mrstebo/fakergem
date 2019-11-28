import { between } from './number-helpers';

export function shuffle(collection: any[]): any[] {
  let index = -1;
  const length = collection.length;
  const result = Array(length);
  while (++index < length) {
    const rand = between(0, index);
    result[index] = result[rand];
    result[rand] = collection[index];
  }
  return result;
}

export function pickOne<T>(collection: T[] | string): T | string {
  const index = between(0, collection.length - 1);
  return collection[index];
}
