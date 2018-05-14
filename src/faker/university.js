import { itemFromCollection } from '../utils/random';

const data = require('../../data/university.json');

export default class University {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return itemFromCollection(data['names']);
  }
}
