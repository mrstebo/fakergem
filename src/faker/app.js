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
  const version = itemFromCollection(VERSION_FORMATS);
  return version.split('.').map(i => {
    if (i =='#') {
      return randomNumber(0, 10);
    }
    return i;
  }).join('.');
}

export function author() {
  return [
    itemFromCollection(nameData['firstNames']),
    itemFromCollection(nameData['lastNames'])
  ].join(' ');
}
