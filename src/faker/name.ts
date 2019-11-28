import data from '../data/name.json';
import { Faker } from '../faker';

export class Name {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public name(): string {
    return [this.firstName(), this.lastName()].join(' ');
  }

  public nameWithMiddle(): string {
    return [this.firstName(), this.firstName(), this.lastName()].join(' ');
  }

  public firstName(): string {
    return this.faker.Random.element(data.firstNames);
  }

  public lastName(): string {
    return this.faker.Random.element(data.lastNames);
  }

  public prefix(): string {
    return this.faker.Random.element(data.prefixes);
  }

  public suffix(): string {
    return this.faker.Random.element(data.suffixes);
  }

  public title(): string {
    return [
      this.faker.Random.element(data.titles.descriptor),
      this.faker.Random.element(data.titles.level),
      this.faker.Random.element(data.titles.job),
    ].join(' ');
  }
}
