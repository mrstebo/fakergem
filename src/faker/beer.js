import { itemFromCollection, randomNumber, randomFloat } from '../utils/random';

const data = require('../../data/beer.json');

export function name() {
  return itemFromCollection(data['names']);
}

export function style() {
  return itemFromCollection(data['styles']);
}

export function hop() {
  return itemFromCollection(data['hops']);
}

export function yeast() {
  return itemFromCollection(data['yeasts']);
}

export function malt() {
  return itemFromCollection(data['malts']);
}

export function ibu() {
  return `${randomNumber(10, 100)} IBU`;
}

export function alcohol() {
  return `${randomFloat(2.0, 10.0).toFixed(1)}%`;
}

export function blg() {
  return `${randomFloat(2.0, 10.0).toFixed(1)}°Blg`
}
