import { Faker } from '../faker';
import data from '../../data/chuck-norris.json';

export class ChuckNorris {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  fact() {
    return this.faker.Random.element(data.facts);
  }
}
