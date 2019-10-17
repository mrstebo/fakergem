import { Faker } from '../faker';
import data from '../../data/company.json';
import { leftPad } from '../utils/text-helpers';

export class Company {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name(): string {
    return this.parse(this.faker.Random.element(data.names));
  }

  suffix(): string {
    return this.faker.Random.element(data.suffixes);
  }

  catchPhrase(): string {
    return Array(3).map(i => this.faker.Random.element(data.buzzwords[i])).join(' ');
  }

  buzzword(): string {
    return this.faker.Random.element([...data.buzzwords[0], ...data.buzzwords[1], ...data.buzzwords[2]]);
  }

  bs(): string {
    return Array(3).map(i => this.faker.Random.element(data.bs[i])).join(' ');
  }

  ein(): string {
    return Array(9)
      .map(_ => this.faker.Number.between(0, 9))
      .join('')
      .replace(/(\d{2})(\d{7})/, '$1-$2');
  }

  dunsNumber(): string {
    return Array(9)
      .map(_ => this.faker.Number.between(0, 9))
      .join('')
      .replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
  }

  logo(): string {
    const number = this.faker.Number.between(1, 14);
    return `https://pigment.github.io/fake-logos/logos/medium/color/${number}.png`;
  }

  swedishOrganisationNumber(): string {
    const base = parseInt([
      this.faker.Number.between(1, 9),
      this.faker.Number.between(0, 9),
      this.faker.Number.between(2, 9),
      this.faker.Number.number(6),
    ].join(''));
    return `${base}${this.luhnAlgorithm(base)}`;
  }

  norwegianOrganisationNumber(): string {
    let mod11Check = null;
    let base = 0;
    while (mod11Check == null) {
      base = parseInt([
        this.faker.Random.element([8, 9]),
        leftPad(this.faker.Number.between(0, 10000000).toString(), 7, '0')
      ].join(''));
      mod11Check = this.mod11(base);
    }
    return `${base}${mod11Check}`;
  }

  australianBusinessNumber(): string {
    const base = leftPad(this.faker.Number.between(0, 1000000000).toString(), 9, '0');
    const abn = `00${base}`.split('').map(parseInt);
    return `${99 - (this.abnChecksum(abn) % 89)}${base}`;
  }

  profession(): string {
    return this.faker.Random.element(data.professions);
  }

  private parse(format: string): string {
    const text = format.replace(/\{(\w+)\}/g, m => `{Company.${m.substring(1)}`);
    return this.faker.Fake.f(text);
  }

  private luhnAlgorithm(number: number): number {
    let sum = 0;
    `${number}`
      .split('')
      .map((x, i) => (i % 2 == 0 ? parseInt(x) * 2 : parseInt(x)))
      .forEach(n => `${n}`.split('').forEach(c => (sum += c.charCodeAt(0))));
    return sum % 10 == 0 ? 0 : (sum / 10 + 1) * 10 - sum;
  }

  private mod11(number: number): number {
    const weight = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7];
    const sum = `${number}`
      .split('')
      .reverse()
      .reduce((acc, val, index) => {
        return acc = ''+val.charCodeAt(0) * weight[index - 1];
      });
    const remainder = parseInt(sum) % 11;

    return 11 - remainder;
  }

  private abnChecksum(abn: Array<number>): number {
    const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

    return weights.reduce((acc, val, index) => {
      return acc + val * abn[index - 1];
    });
  }
}
