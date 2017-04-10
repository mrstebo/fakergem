import data from '../../data/app.json';
import nameData from '../../data/name.json';
import { itemFromCollection, randomNumber } from '../utils/random';

const VERSION_FORMATS = [
  '0.#.#',
  '0.##',
  '#.##',
  '#.#',
  '#.#.#'
];

export function name() {
  return itemFromCollection(data['names']);
}

export function version() {
  return itemFromCollection(VERSION_FORMATS)
    .split('.')
    .map(parseNumber)
    .join('.');
}

export function author() {
  return [
    itemFromCollection(nameData['firstNames']),
    itemFromCollection(nameData['lastNames'])
  ].join(' ');
}

function parseNumber(n) {
  (n.match(/#/g) || []).forEach(_ => {
    n = n.replace(/#/, randomNumber(0, 10));
  });
  return n;
}
