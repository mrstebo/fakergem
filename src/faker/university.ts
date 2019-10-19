import { Faker } from '../faker';
import data from '../data/university.json';

export class University {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name(): string {
    return this.faker.Random.element(data.names);
  }
}
