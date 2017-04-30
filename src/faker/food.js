import { itemFromCollection } from '../utils/random';

const data = require('../../data/food.json');

export function ingredient() {
  return itemFromCollection(data['ingredients']);
}

export function spice() {
  return itemFromCollection(data['spices']);
}

export function measurement() {
  return itemFromCollection(data['measurements']);
}

