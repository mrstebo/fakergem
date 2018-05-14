import { itemFromCollection } from '../utils/random';

const data = require('../../data/chuck-norris.json');

export default class ChuckNorris {
  constructor(faker) {
    this.faker = faker;
  }

  fact() {
    return itemFromCollection(data['facts']);
  }
}
