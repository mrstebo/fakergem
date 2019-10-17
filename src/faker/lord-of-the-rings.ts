import { Faker } from '../faker';
import data from '../data/lord-of-the-rings.json';

export class LordOfTheRings {
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
}
