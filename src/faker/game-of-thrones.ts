import { Faker } from '../faker';
import data from '../../data/game-of-thrones.json';

export class GameOfThrones {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  character() {
    return this.faker.Random.element(data.characters);
  }

  house() {
    return this.faker.Random.element(data.houses);
  }

  city() {
    return this.faker.Random.element(data.cities);
  }

  dragon() {
    return this.faker.Random.element(data.dragons);
  }
}
