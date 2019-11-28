import data from '../data/food.json';
import { Faker } from '../faker';

export class Food {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public ingredient(): string {
    return this.faker.Random.element(data.ingredients);
  }

  public spice(): string {
    return this.faker.Random.element(data.spices);
  }

  public measurement(): string {
    return this.faker.Random.element(data.measurements);
  }
}
