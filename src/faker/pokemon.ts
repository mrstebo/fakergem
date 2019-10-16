import { Faker } from '../faker';
import data from '../../data/pokemon.json';

export class Pokemon {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data.names);
  }

  location() {
    return this.faker.Random.element(data.locations);
  }
}
