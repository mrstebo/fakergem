import { Faker } from '../faker';
import data from '../data/bank.json';

export class Bank {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name(): string {
    return this.faker.Random.element(data.names);
  }

  swiftBic(): string {
    return this.faker.Random.element(data.swiftBics);
  }

  iban(bankCountryCode: string = 'GB'): string {
    const details = data.ibanDetails.filter(x => x.bankCountryCode == bankCountryCode.toUpperCase())[0];
    const bcc = `${details.bankCountryCode}${this.faker.Number.between(10, 99)}`;
    const ilc = Array(details.ibanLetterCode)
      .map(() => String.fromCharCode(65 + this.faker.Number.between(0, 25)))
      .join('');
    const ib = Array(details.ibanDigits)
      .fill('')
      .map(() => this.faker.Number.between(0, 9))
      .join('');
    return `${bcc}${ilc}${ib}`;
  }
}
