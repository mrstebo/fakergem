import { itemFromCollection } from '../utils/random';

const data = require('../../data/cat.json');

export default class Cat {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return itemFromCollection(data['names']);
  }

  breed() {
    return itemFromCollection(data['breeds']);
  }

  registry() {
    return itemFromCollection(data['registries']);
  }
}
