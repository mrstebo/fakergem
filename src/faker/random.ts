import { Faker } from '../faker';
import { pickOne, shuffle } from '../utils/collection-helpers';

export class Random {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public assortment(array: any[], n: number): any[] {
    const count = Math.max(0, n);
    const repeatCount = Math.floor(count / array.length) || 1;
    const repeated = Array(repeatCount * array.length)
      .fill(null)
      .map((e, i) => array[i % array.length]);
    return shuffle(repeated).slice(0, count);
  }

  public element(array: any[] | string): any {
    return pickOne(array);
  }
}
