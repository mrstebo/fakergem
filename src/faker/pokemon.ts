import { Faker } from '../faker';
import data from '../data/pokemon.json';

export class Pokemon {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name(): string {
    return this.faker.Random.element(data.names);
  }

  location(): string {
    return this.faker.Random.element(data.locations);
  }
}
