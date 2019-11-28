import data from '../data/university.json';
import { Faker } from '../faker';

export class University {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public name(): string {
    return this.faker.Random.element(data.names);
  }
}
