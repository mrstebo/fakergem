import data from '../data/chuck-norris.json';
import { Faker } from '../faker';

export class ChuckNorris {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public fact(): string {
    return this.faker.Random.element(data.facts);
  }
}
