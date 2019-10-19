import { Faker } from '../faker';
import data from '../data/rock-band.json';

export class RockBand {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name(): string {
    return this.faker.Random.element(data.names);
  }
}
