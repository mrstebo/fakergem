import { Faker } from '../faker';
import data from '../data/twin-peaks.json';

export class TwinPeaks {
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
