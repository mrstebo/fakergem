import { Faker } from '../faker';
import data from '../../data/name.json';

export class Name {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name(): string {
    return [this.firstName(), this.lastName()].join(' ');
  }

  nameWithMiddle(): string {
    return [this.firstName(), this.firstName(), this.lastName()].join(' ');
  }

  firstName(): string {
    return this.faker.Random.element(data.firstNames);
  }

  lastName(): string {
    return this.faker.Random.element(data.lastNames);
  }

  prefix(): string {
    return this.faker.Random.element(data.prefixes);
  }

  suffix(): string {
    return this.faker.Random.element(data.suffixes);
  }

  title(): string {
    return [
      this.faker.Random.element(data.titles.descriptor),
      this.faker.Random.element(data.titles.level),
      this.faker.Random.element(data.titles.job),
    ].join(' ');
  }
}
