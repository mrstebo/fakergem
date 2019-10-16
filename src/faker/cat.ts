import { Faker } from '../faker';
import data from '../../data/cat.json';

export class Cat {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data.names);
  }

  breed() {
    return this.faker.Random.element(data.breeds);
  }

  registry() {
    return this.faker.Random.element(data.registries);
  }
}
