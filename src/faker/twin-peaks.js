import { itemFromCollection } from '../utils/random';

const data = require('../../data/twin-peaks.json');

export default class TwinPeaks {
  constructor(faker) {
    this.faker = faker;
  }

  character() {
    return itemFromCollection(data['characters']);
  }

  location() {
    return itemFromCollection(data['locations']);
  }

  quote() {
    return itemFromCollection(data['quotes']);
  }
}
