import { itemFromCollection } from '../utils/random';

const data = require('../../data/pokemon.json');

export function name() {
  return itemFromCollection(data['names']);
}

export function location() {
  return itemFromCollection(data['locations']);
}

