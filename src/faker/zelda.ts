import data from '../data/zelda.json';
import { Faker } from '../faker';

export class Zelda {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public game() {
    return this.faker.Random.element(data.games);
  }

  public character() {
    return this.faker.Random.element(data.characters);
  }

  public location() {
    return this.faker.Random.element(data.locations);
  }
}
