import data from '../data/game-of-thrones.json';
import { Faker } from '../faker';

export class GameOfThrones {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public character(): string {
    return this.faker.Random.element(data.characters);
  }

  public house(): string {
    return this.faker.Random.element(data.houses);
  }

  public city(): string {
    return this.faker.Random.element(data.cities);
  }

  public dragon(): string {
    return this.faker.Random.element(data.dragons);
  }
}
