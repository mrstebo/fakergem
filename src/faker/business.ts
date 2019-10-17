import { Faker } from '../faker';
import data from '../../data/business.json';

export class Business {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  creditCardNumber(): string {
    return this.faker.Random.element(data.creditCardNumbers);
  }

  creditCardExpiryDate(): Date {
    return this.daysFromNow(365 * this.faker.Number.between(1, 5));
  }

  creditCardType(): string {
    return this.faker.Random.element(data.creditCardTypes);
  }

  private daysFromNow(n: number): Date {
    const d = new Date();
    d.setDate(d.getDate() + n);
    d.setHours(0, 0, 0, 0);
    return d;
  }
}
