import data from '../data/matz.json';
import { Faker } from '../faker';

export class Matz {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public quote(): string {
    return this.faker.Random.element(data.quotes);
  }
}
