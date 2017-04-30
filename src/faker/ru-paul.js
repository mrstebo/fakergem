import { itemFromCollection } from '../utils/random';

const data = require('../../data/ru-paul.json');

export function quote() {
  return itemFromCollection(data['quotes']);
}
