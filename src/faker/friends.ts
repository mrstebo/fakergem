import { Faker } from '../faker';
import data from '../../data/friends.json';

export class Friends {
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
}
