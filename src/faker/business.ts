import data from '../data/business.json';
import { Faker } from '../faker';

export class Business {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public creditCardNumber(): string {
    return this.faker.Random.element(data.creditCardNumbers);
  }

  public creditCardExpiryDate(): Date {
    return this.daysFromNow(365 * this.faker.Number.between(1, 5));
  }

  public creditCardType(): string {
    return this.faker.Random.element(data.creditCardTypes);
  }

  private daysFromNow(n: number): Date {
    const d = new Date();
    d.setDate(d.getDate() + n);
    d.setHours(0, 0, 0, 0);
    return d;
  }
}
