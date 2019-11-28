import data from '../data/ru-paul.json';
import { Faker } from '../faker';

export class RuPaul {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public quote(): string {
    return this.faker.Random.element(data.quotes);
  }
}
