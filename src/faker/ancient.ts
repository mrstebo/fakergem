import { Faker } from '../faker';
import data from '../../data/ancient.json';

export class Ancient {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  god(): string {
    return this.faker.Random.element(data.gods);
  }

  primordial(): string {
    return this.faker.Random.element(data.primordials);
  }

  titan(): string {
    return this.faker.Random.element(data.titans);
  }

  hero(): string {
    return this.faker.Random.element(data.heroes);
  }
}
