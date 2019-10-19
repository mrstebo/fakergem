import { Faker } from '../faker';
import data from '../data/game-of-thrones.json';

export class GameOfThrones {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  character(): string {
    return this.faker.Random.element(data.characters);
  }

  house(): string {
    return this.faker.Random.element(data.houses);
  }

  city(): string {
    return this.faker.Random.element(data.cities);
  }

  dragon(): string {
    return this.faker.Random.element(data.dragons);
  }
}
