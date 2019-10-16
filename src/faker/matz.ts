import { Faker } from '../faker';
import data from '../../data/matz.json';

export class Matz {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  quote(): string {
    return this.faker.Random.element(data.quotes);
  }
}
