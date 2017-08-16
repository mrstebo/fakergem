import { itemFromCollection } from '../utils/random';

const nameData = require('../../data/name.json');

export function screenName() {
  return [
    itemFromCollection(nameData['firstNames']),
    itemFromCollection(nameData['lastNames'])
  ].join('_').substring(0, 20);
}
