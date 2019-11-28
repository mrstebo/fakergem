import data from '../data/rock-band.json';
import { Faker } from '../faker';

export class RockBand {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public name(): string {
    return this.faker.Random.element(data.names);
  }
}
