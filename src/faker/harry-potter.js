import { itemFromCollection } from '../utils/random';

const data = require('../../data/harry-potter.json');

export default class HarryPotter {
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

  book() {
    return itemFromCollection(data['books']);
  }
}
