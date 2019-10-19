import { Faker } from '../faker';
import data from '../data/chuck-norris.json';

export class ChuckNorris {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  fact(): string {
    return this.faker.Random.element(data.facts);
  }
}
