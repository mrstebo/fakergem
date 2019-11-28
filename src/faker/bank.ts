import data from '../data/bank.json';
import { Faker } from '../faker';

export class Bank {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public name(): string {
    return this.faker.Random.element(data.names);
  }

  public swiftBic(): string {
    return this.faker.Random.element(data.swiftBics);
  }

  public iban(bankCountryCode: string = 'GB'): string {
    const details = data.ibanDetails.filter(x => x.bankCountryCode === bankCountryCode.toUpperCase())[0];
    const bcc = `${details.bankCountryCode}${this.faker.Number.between(10, 99)}`;
    const ilc = Array(parseInt(details.ibanLetterCode, 10))
      .fill('0')
      .map(() => String.fromCharCode(65 + this.faker.Number.between(0, 25)))
      .join('');
    const ib = Array(parseInt(details.ibanDigits, 10))
      .fill('')
      .map(() => this.faker.Number.between(0, 9))
      .join('');
    return `${bcc}${ilc}${ib}`;
  }
}
