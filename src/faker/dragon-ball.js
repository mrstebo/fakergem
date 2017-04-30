import { itemFromCollection } from '../utils/random';

const data = require('../../data/dragon-ball.json');

export function character() {
  return itemFromCollection(data['characters']);
}

