import { itemFromCollection } from '../utils/random';

const data = require('../../data/chuck-norris.json');

export function fact() {
  return itemFromCollection(data['facts']);
}
