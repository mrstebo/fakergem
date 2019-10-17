import { Faker } from '../faker';
import { pickOne, shuffle } from '../utils/collection-helpers';

export class Random {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  assortment(array: Array<any>, n: number): Array<any> {
    const count = Math.max(0, n);
    const repeatCount = count / array.length || 1;
    const repeated = Array(repeatCount * array.length).map((e, i) => array[i % array.length]);
    return shuffle(repeated).slice(0, count);
  }

  element(array: Array<any> | string): any {
    if (!array) {
      throw new Error('An array or string must be specified');
    }
    return pickOne(array);
  }
}
