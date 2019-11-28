import data from '../data/ancient.json';
import { Faker } from '../faker';

export class Ancient {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public god(): string {
    return this.faker.Random.element(data.gods);
  }

  public primordial(): string {
    return this.faker.Random.element(data.primordials);
  }

  public titan(): string {
    return this.faker.Random.element(data.titans);
  }

  public hero(): string {
    return this.faker.Random.element(data.heroes);
  }
}
