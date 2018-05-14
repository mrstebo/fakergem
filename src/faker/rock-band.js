import { itemFromCollection } from '../utils/random';

const data = require('../../data/rock-band.json');

export default class RockBand {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return itemFromCollection(data['names']);
  }
}
