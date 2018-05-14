import { itemFromCollection } from '../utils/random';

const data = require('../../data/zelda.json');

export default class Zelda {
  constructor(faker) {
    this.faker = faker;
  }

  game() {
    return itemFromCollection(data['games']);
  }

  character() {
    return itemFromCollection(data['characters']);
  }

  location() {
    return itemFromCollection(data['locations']);
  }
}
