import { itemFromCollection } from '../utils/random';

const data = require('../../data/music.json');

export default class Music {
  constructor(faker) {
    this.faker = faker;
  }

  key() {
    return [
      itemFromCollection(data['keys']),
      itemFromCollection(data['keyVariants'])
    ].join('');
  }

  chord() {
    return [
      itemFromCollection(data['keys']),
      itemFromCollection(data['chordTypes'])
    ].join('');
  }

  instrument() {
    return itemFromCollection(data['instruments']);
  }
}
