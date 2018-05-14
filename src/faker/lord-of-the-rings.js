import { itemFromCollection } from '../utils/random';

const data = require('../../data/lord-of-the-rings.json');

export default class LordOfTheRings {
  constructor(faker) {
    this.faker = faker;
  }

  character() {
    return itemFromCollection(data['characters']);
  }

  location() {
    return itemFromCollection(data['locations']);
  }
}
