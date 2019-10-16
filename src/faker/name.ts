import { Faker } from '../faker';
import data from '../../data/name.json';

export class Name {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name() {
    return [this.firstName(), this.lastName()].join(' ');
  }

  nameWithMiddle() {
    return [this.firstName(), this.firstName(), this.lastName()].join(' ');
  }

  firstName() {
    return this.faker.Random.element(data['firstNames']);
  }

  lastName() {
    return this.faker.Random.element(data['lastNames']);
  }

  prefix() {
    return this.faker.Random.element(data['prefixes']);
  }

  suffix() {
    return this.faker.Random.element(data['suffixes']);
  }

  title() {
    return [
      this.faker.Random.element(data['titles']['descriptor']),
      this.faker.Random.element(data['titles']['level']),
      this.faker.Random.element(data['titles']['job']),
    ].join(' ');
  }
}
