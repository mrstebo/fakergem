import data from '../../data/app.json';
import nameData from '../../data/name.json';

const VERSION_FORMATS = [
  '0.#.#',
  '0.##',
  '#.##',
  '#.#',
  '#.#.#'
];

export function name() {
  return pickOneOf(data['names']);
}

export function version() {
  const version = pickOneOf(VERSION_FORMATS);
  return version.split('.').map(i => {
    if (i =='#') {
      return randomNumber();
    }
    return i;
  }).join('.');
}

export function author() {
  return [
    pickOneOf(nameData['firstNames']),
    pickOneOf(nameData['lastNames'])
  ].join(' ');
}

function pickOneOf(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

function randomNumber() {
  return Math.floor(Math.random() * 10);
}
