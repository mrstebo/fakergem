import { itemFromCollection } from '../utils/random';

const data = require('../../data/pokemon.json');

export default class Pokemon {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return itemFromCollection(data['names']);
  }

  location() {
    return itemFromCollection(data['locations']);
  }
}
