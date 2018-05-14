import { itemFromCollection } from '../utils/random';

const data = require('../../data/ru-paul.json');

export default class RuPaul {
  constructor(faker) {
    this.faker = faker;
  }

  quote() {
    return itemFromCollection(data['quotes']);
  }
}
