import { Faker } from '../faker';
import data from '../data/food.json';

export class Food {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  ingredient(): string {
    return this.faker.Random.element(data.ingredients);
  }

  spice(): string {
    return this.faker.Random.element(data.spices);
  }

  measurement(): string {
    return this.faker.Random.element(data.measurements);
  }
}
