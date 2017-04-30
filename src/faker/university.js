import { itemFromCollection } from '../utils/random';

const data = require('../../data/university.json');

export function name() {
  return itemFromCollection(data['names']);
}

