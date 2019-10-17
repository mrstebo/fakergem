import { Faker } from '../faker';
import data from '../data/rick-and-morty.json';

export class RickAndMorty {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  character(): string {
    return this.faker.Random.element(data.characters);
  }

  location(): string {
    return this.faker.Random.element(data.locations);
  }

  quote(): string {
    return this.faker.Random.element(data.quotes);
  }
}
