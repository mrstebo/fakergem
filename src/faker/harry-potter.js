import { itemFromCollection } from '../utils/random';

const data = require('../../data/harry-potter.json');

export function character() {
  return itemFromCollection(data['characters']);
}

export function location() {
  return itemFromCollection(data['locations']);
}

export function quote() {
  return itemFromCollection(data['quotes']);
}

export function book() {
  return itemFromCollection(data['books']);
}

