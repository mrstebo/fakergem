import { itemFromCollection } from '../utils/random';

const data = require('../../data/matz.json');

export function quote() {
  return itemFromCollection(data['quotes']);
}

