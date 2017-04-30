import { itemFromCollection } from '../utils/random';

const data = require('../../data/zelda.json');

export function game() {
  return itemFromCollection(data['games']);
}

export function character() {
  return itemFromCollection(data['characters']);
}

export function location() {
  return itemFromCollection(data['locations']);
}

