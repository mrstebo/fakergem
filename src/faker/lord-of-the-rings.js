import { itemFromCollection } from '../utils/random';

const data = require('../../data/lord-of-the-rings.json');

export function character() {
  return itemFromCollection(data['characters']);
}

export function location() {
  return itemFromCollection(data['locations']);
}

