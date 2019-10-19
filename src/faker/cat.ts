import { Faker } from '../faker';
import data from '../data/cat.json';

export class Cat {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name(): string {
    return this.faker.Random.element(data.names);
  }

  breed(): string {
    return this.faker.Random.element(data.breeds);
  }

  registry(): string {
    return this.faker.Random.element(data.registries);
  }
}
