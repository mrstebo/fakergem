import data from '../data/company.json';
import { Faker } from '../faker';
import { leftPad } from '../utils/text-helpers';

export class Company {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public name(): string {
    return this.parse(this.faker.Random.element(data.names));
  }

  public suffix(): string {
    return this.faker.Random.element(data.suffixes);
  }

  public catchPhrase(): string {
    return Array(3)
      .fill(null)
      .map((_, i) => this.faker.Random.element(data.buzzwords[i]))
      .join(' ');
  }

  public buzzword(): string {
    return this.faker.Random.element([...data.buzzwords[0], ...data.buzzwords[1], ...data.buzzwords[2]]);
  }

  public bs(): string {
    return Array(3)
      .fill(null)
      .map((_, i) => this.faker.Random.element(data.bs[i]))
      .join(' ');
  }

  public ein(): string {
    return Array(9)
      .fill(null)
      .map(() => this.faker.Number.between(0, 9))
      .join('')
      .replace(/(\d{2})(\d{7})/, '$1-$2');
  }

  public dunsNumber(): string {
    return Array(9)
      .fill(null)
      .map(() => this.faker.Number.between(0, 9))
      .join('')
      .replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
  }

  public logo(): string {
    const n = this.faker.Number.between(1, 14);
    return `https://pigment.github.io/fake-logos/logos/medium/color/${n}.png`;
  }

  public swedishOrganisationNumber(): string {
    const base = parseInt(
      [
        this.faker.Number.between(1, 9),
        this.faker.Number.between(0, 9),
        this.faker.Number.between(2, 9),
        this.faker.Number.number(6),
      ].join(''),
      10
    );
    return `${base}${this.luhnAlgorithm(base)}`;
  }

  public norwegianOrganisationNumber(): string {
    let mod11Check = null;
    let base = 0;
    while (mod11Check == null) {
      base = parseInt(
        [this.faker.Random.element([8, 9]), leftPad(this.faker.Number.between(0, 10000000).toString(), 7, '0')].join(
          '',
        ),
        10
      );
      mod11Check = this.mod11(base);
    }
    return `${base}${mod11Check}`;
  }

  public australianBusinessNumber(): string {
    const base = leftPad(this.faker.Number.between(0, 1000000000).toString(), 9, '0');
    const abn = `00${base}`.split('').map(x => parseInt(x, 10));
    return `${99 - (this.abnChecksum(abn) % 89)}${base}`;
  }

  public profession(): string {
    return this.faker.Random.element(data.professions);
  }

  private parse(format: string): string {
    const text = format.replace(/\{(\w+)\}/g, m => `{Company.${m.substring(1)}`);
    return this.faker.Fake.f(text);
  }

  private luhnAlgorithm(num: number): number {
    let sum = 0;
    `${num}`
      .split('')
      .map((x, i) => (i % 2 === 0 ? parseInt(x, 10) * 2 : parseInt(x, 10)))
      .forEach(i => `${i}`.split('').forEach(c => (sum += c.charCodeAt(0))));
    return sum % 10 === 0 ? 0 : (sum / 10 + 1) * 10 - sum;
  }

  private mod11(num: number): number {
    const weight = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7];
    const sum = `${num}`
      .split('')
      .reverse()
      .reduce((acc, val, index) => {
        return (acc = '' + val.charCodeAt(0) * weight[index - 1]);
      });
    const remainder = parseInt(sum, 10) % 11;

    return 11 - remainder;
  }

  private abnChecksum(abn: number[]): number {
    const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    return weights.reduce((acc, val, index) => (acc += val * abn[index]), 0);
  }
}
