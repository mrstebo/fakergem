import { randomNumber, itemFromCollection } from '../utils/random';

const data = require('../../data/superhero.json');

export default class Superhero {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return itemFromCollection(data['names'])
      .replace('{prefix}', itemFromCollection(data['prefixes']))
      .replace('{suffix}', itemFromCollection(data['suffixes']))
      .replace('{descriptor}', itemFromCollection(data['descriptors']));
  }

  power() {
    return itemFromCollection(data['powers']);
  }

  prefix() {
    return itemFromCollection(data['prefixes']);
  }

  suffix() {
    return itemFromCollection(data['suffixes']);
  }

  descriptor() {
    return itemFromCollection(data['descriptors']);
  }
}
