import data from '../../data/app.json';
import nameData from '../../data/name.json';
import { itemFromCollection, randomNumber } from '../utils/random';

export function name() {
  return itemFromCollection(data['names']);
}

export function version() {
  return itemFromCollection(data['versions'])
    .split('.')
    .map(x => x.replace(/#/g, () => randomNumber(0, 10)))
    .join('.');
}

export function author() {
  return [
    itemFromCollection(nameData['firstNames']),
    itemFromCollection(nameData['lastNames'])
  ].join(' ');
}
