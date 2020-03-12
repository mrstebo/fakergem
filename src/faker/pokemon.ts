import data from '../data/pokemon.json';
import { Faker } from '../faker';

export class Pokemon {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public name(): string {
    return this.faker.Random.element(data.names);
  }

  public location(): string {
    return this.faker.Random.element(data.locations);
  }
}
