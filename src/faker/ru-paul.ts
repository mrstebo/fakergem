import { Faker } from '../faker';
import data from '../../data/ru-paul.json';

export class RuPaul {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  quote() {
    return this.faker.Random.element(data.quotes);
  }
}
