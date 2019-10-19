import { Faker } from '../faker';
import data from '../data/superhero.json';

export class Superhero {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name(): string {
    return this.faker.Random.element(data.names)
      .replace('{prefix}', this.faker.Random.element(data.prefixes))
      .replace('{suffix}', this.faker.Random.element(data.suffixes))
      .replace('{descriptor}', this.faker.Random.element(data.descriptors));
  }

  power(): string {
    return this.faker.Random.element(data.powers);
  }

  prefix(): string {
    return this.faker.Random.element(data.prefixes);
  }

  suffix(): string {
    return this.faker.Random.element(data.suffixes);
  }

  descriptor(): string {
    return this.faker.Random.element(data.descriptors);
  }
}
