import data from '../data/twin-peaks.json';
import { Faker } from '../faker';

export class TwinPeaks {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public character(): string {
    return this.faker.Random.element(data.characters);
  }

  public location(): string {
    return this.faker.Random.element(data.locations);
  }

  public quote(): string {
    return this.faker.Random.element(data.quotes);
  }
}
