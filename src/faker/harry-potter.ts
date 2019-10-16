import { Faker } from '../faker';
import data from '../../data/harry-potter.json';

export class HarryPotter {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  character() {
    return this.faker.Random.element(data.characters);
  }

  location() {
    return this.faker.Random.element(data.locations);
  }

  quote() {
    return this.faker.Random.element(data.quotes);
  }

  book() {
    return this.faker.Random.element(data.books);
  }
}
