import { itemFromCollection } from '../utils/random';

export function element(array) {
  if (!array) {
    throw new Error('An array or string must be specified');
  }
  return itemFromCollection(array);
}
