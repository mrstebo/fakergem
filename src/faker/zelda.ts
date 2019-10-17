import { Faker } from '../faker';
import data from '../data/zelda.json';

export class Zelda {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  game() {
    return this.faker.Random.element(data.games);
  }

  character() {
    return this.faker.Random.element(data.characters);
  }

  location() {
    return this.faker.Random.element(data.locations);
  }
}
