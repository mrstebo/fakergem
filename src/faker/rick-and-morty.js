import { itemFromCollection } from '../utils/random';

const data = require('../../data/rick-and-morty.json');

export function character() {
  return itemFromCollection(data['characters']);
}

export function location() {
  return itemFromCollection(data['locations']);
}

export function quote() {
  return itemFromCollection(data['quotes']);
}

