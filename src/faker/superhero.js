import data from '../../data/superhero.json';
import { randomNumber, itemFromCollection } from '../utils/random';

const NAME_FORMATS = [
  '{prefix} {descriptor} {suffix}',
  '{prefix} {descriptor}',
  '{descriptor} {suffix}',
  '{descriptor}'
];

export function name(format=null) {
  return (format || itemFromCollection(NAME_FORMATS))
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
