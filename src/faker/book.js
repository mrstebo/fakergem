import { itemFromCollection } from '../utils/random';

const data = require('../../data/book.json');
const nameData = require('../../data/name.json');

export function title() {
  return itemFromCollection(data['titles']);
}

export function author() {
  return [
    itemFromCollection(nameData['firstNames']),
    itemFromCollection(nameData['lastNames'])
  ].join(' ');
}

export function publisher() {
  return itemFromCollection(data['publishers']);
}

export function genre() {
  return itemFromCollection(data['genres']);
}
