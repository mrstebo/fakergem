import { Faker } from '../faker';
import data from '../../data/food.json';

export class Food {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  ingredient() {
    return this.faker.Random.element(data['ingredients']);
  }

  spice() {
    return this.faker.Random.element(data['spices']);
  }

  measurement() {
    return this.faker.Random.element(data['measurements']);
  }
}
