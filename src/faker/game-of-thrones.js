import { itemFromCollection } from '../utils/random';

const data = require('../../data/game-of-thrones.json');

export function character() {
  return itemFromCollection(data['characters']);
}

export function house() {
  return itemFromCollection(data['houses']);
}

export function city() {
  return itemFromCollection(data['cities']);
}

export function dragon() {
  return itemFromCollection(data['dragons']);
}

