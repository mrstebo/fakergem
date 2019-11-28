import data from '../data/superhero.json';
import { Faker } from '../faker';

export class Superhero {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public name(): string {
    return this.faker.Random.element(data.names)
      .replace('{prefix}', this.faker.Random.element(data.prefixes))
      .replace('{suffix}', this.faker.Random.element(data.suffixes))
      .replace('{descriptor}', this.faker.Random.element(data.descriptors));
  }

  public power(): string {
    return this.faker.Random.element(data.powers);
  }

  public prefix(): string {
    return this.faker.Random.element(data.prefixes);
  }

  public suffix(): string {
    return this.faker.Random.element(data.suffixes);
  }

  public descriptor(): string {
    return this.faker.Random.element(data.descriptors);
  }
}
