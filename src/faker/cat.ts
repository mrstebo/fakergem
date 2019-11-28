import data from '../data/cat.json';
import { Faker } from '../faker';

export class Cat {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public name(): string {
    return this.faker.Random.element(data.names);
  }

  public breed(): string {
    return this.faker.Random.element(data.breeds);
  }

  public registry(): string {
    return this.faker.Random.element(data.registries);
  }
}
