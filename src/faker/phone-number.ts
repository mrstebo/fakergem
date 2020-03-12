import data from '../data/phone-number.json';
import { Faker } from '../faker';

export class PhoneNumber {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public phoneNumber(): string {
    const format = this.faker.Random.element(data.phoneNumber.formats);
    return format.replace(/#/g, () => this.faker.Number.between(0, 9));
  }

  public cellPhone(): string {
    const format = this.faker.Random.element(data.cellPhone.formats);
    return format.replace(/#/g, () => this.faker.Number.between(0, 9));
  }

  public areaCode(): string {
    return this.faker.Random.element(data.areaCodes);
  }

  public exchangeCode(): string {
    return this.faker.Random.element(data.exchangeCodes);
  }

  public subscriberNumber(length: number = 4): string {
    const min = Math.pow(10, length) / 10;
    const max = min * 10 - 1;
    return `${this.faker.Number.between(min, max)}`;
  }

  public extension(length: number = 4): string {
    return this.subscriberNumber(length);
  }
}
