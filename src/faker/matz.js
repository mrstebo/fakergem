import { itemFromCollection } from '../utils/random';

const data = require('../../data/matz.json');

export default class Matz {
  constructor(faker) {
    this.faker = faker;
  }

  quote() {
    return itemFromCollection(data['quotes']);
  }
}
