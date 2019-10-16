import { Faker } from '../faker';

export class Boolean {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  boolean(trueRatio: number = 0.5): boolean {
    return Math.random() < trueRatio;
  }
}
