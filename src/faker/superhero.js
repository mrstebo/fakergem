import data from '../../data/superhero.json';
import { randomNumber, itemFromCollection } from '../utils/random';

export function name() {
  return itemFromCollection(data['names'])
    .replace('{prefix}', itemFromCollection(data['prefixes']))
    .replace('{suffix}', itemFromCollection(data['suffixes']))
    .replace('{descriptor}', itemFromCollection(data['descriptors']));
}

export function power() {
  return itemFromCollection(data['powers']);
}

export function prefix() {
  return itemFromCollection(data['prefixes']);
}

export function suffix() {
  return itemFromCollection(data['suffixes']);
}

export function descriptor() {
  return itemFromCollection(data['descriptors']);
}
