import { itemFromCollection } from '../utils/random';

const data = require('../../data/rick-and-morty.json');

export default class RickAndMorty {
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
