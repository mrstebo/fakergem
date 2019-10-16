import { Faker } from '../faker';

export class Boolean {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  boolean(trueRatio = 0.5) {
    return Math.random() < trueRatio;
  }
}
