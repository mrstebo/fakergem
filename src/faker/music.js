import { itemFromCollection } from '../utils/random';

const data = require('../../data/music.json');

export function key() {
  return [
    itemFromCollection(data['keys']),
    itemFromCollection(data['keyVariants'])
  ].join('');
}

export function chord() {
  return [
    itemFromCollection(data['keys']),
    itemFromCollection(data['chordTypes'])
  ].join('');
}

export function instrument() {
  return itemFromCollection(data['instruments']);
}
