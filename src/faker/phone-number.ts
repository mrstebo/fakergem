import { Faker } from '../faker';
import data from '../../data/phone-number.json';

export class PhoneNumber {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  phoneNumber(): string {
    const format = this.faker.Random.element(data.phoneNumber.formats);
    return format.replace(/#/g, _ => this.faker.Number.between(0, 9));
  }

  cellPhone(): string {
    const format = this.faker.Random.element(data.cellPhone.formats);
    return format.replace(/#/g, _ => this.faker.Number.between(0, 9));
  }

  areaCode(): string {
    return this.faker.Random.element(data.areaCodes);
  }

  exchangeCode(): string {
    return this.faker.Random.element(data.exchangeCodes);
  }

  subscriberNumber(length: number = 4): string {
    const min = Math.pow(10, length) / 10;
    const max = min * 10 - 1;
    return `${this.faker.Number.between(min, max)}`;
  }

  extension(length: number = 4): string {
    return this.subscriberNumber(length);
  }
}
