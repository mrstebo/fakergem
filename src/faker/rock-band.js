import { itemFromCollection } from '../utils/random';

const data = require('../../data/rock-band.json');

export function name() {
  return itemFromCollection(data['names']);
}
