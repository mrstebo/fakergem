import { Faker } from '../faker';
import data from '../../data/ancient.json';

export class Ancient {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  god() {
    return this.faker.Random.element(data['gods']);
  }

  primordial() {
    return this.faker.Random.element(data['primordials']);
  }

  titan() {
    return this.faker.Random.element(data['titans']);
  }

  hero() {
    return this.faker.Random.element(data['heroes']);
  }
}
