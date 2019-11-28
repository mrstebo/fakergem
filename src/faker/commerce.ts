import data from '../data/commerce.json';
import { Faker } from '../faker';

export class Commerce {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public color(): string {
    return this.faker.Color.colorName();
  }

  public department(max: number = 3, fixedAmount: boolean = false): string {
    const num = fixedAmount ? max : this.faker.Number.between(1, max);
    const categories = this.buildCategories(num);
    return num > 1 ? this.mergeCategories(categories) : categories[0];
  }

  public productName(): string {
    return [
      this.faker.Random.element(data.productNames.adjective),
      this.faker.Random.element(data.productNames.material),
      this.faker.Random.element(data.productNames.product),
    ].join(' ');
  }

  public price(range = { min: 0.0, max: 100.0 }): string {
    const n = this.faker.Number.between(range.min, range.max);
    return (Math.floor(n * 100) / 100.0).toFixed(2);
  }

  public promotionCode(digits: number = 6): string {
    return [
      this.faker.Random.element(data.promotionCodes.adjective),
      this.faker.Random.element(data.promotionCodes.noun),
      this.faker.Number.number(digits).toLocaleString('fullwide', { useGrouping: false }),
    ].join('');
  }

  private buildCategories(num: number): string[] {
    const categories = [];
    while (categories.length < num) {
      const category = this.faker.Random.element(data.departments);
      if (categories.indexOf(category) < 0) {
        categories.push(category);
      }
    }
    return categories;
  }

  private mergeCategories(categories: string[]): string {
    const separator = ' & ';
    const commaSeparated = categories.slice(0, -1).join(', ');
    const lastCategory = categories.slice(-1);
    return [commaSeparated, lastCategory].join(separator);
  }
}
