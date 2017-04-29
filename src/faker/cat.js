import { itemFromCollection } from '../utils/random';

const data = require('../../data/cat.json');

export function name() {
  return itemFromCollection(data['names']);
}

export function breed() {
  return itemFromCollection(data['breeds']);
}

export function registry() {
  return itemFromCollection(data['registries']);
}
