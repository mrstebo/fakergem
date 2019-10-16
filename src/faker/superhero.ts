import { Faker } from '../faker';
import data from '../../data/superhero.json';

export class Superhero {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data['names'])
      .replace('{prefix}', this.faker.Random.element(data['prefixes']))
      .replace('{suffix}', this.faker.Random.element(data['suffixes']))
      .replace('{descriptor}', this.faker.Random.element(data['descriptors']));
  }

  power() {
    return this.faker.Random.element(data['powers']);
  }

  prefix() {
    return this.faker.Random.element(data['prefixes']);
  }

  suffix() {
    return this.faker.Random.element(data['suffixes']);
  }

  descriptor() {
    return this.faker.Random.element(data['descriptors']);
  }
}
