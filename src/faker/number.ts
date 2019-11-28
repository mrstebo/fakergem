import { Faker } from '../faker';
import { between, betweenFloat } from '../utils/number-helpers';

export class Number {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public number(digits: number = 10): number {
    let num = '';
    if (digits > 1) {
      num = `${this.nonZeroDigit()}`;
      digits -= 1;
    }
    return parseInt(num + this.leadingZeroNumber(digits), 10);
  }

  public decimal(leftDigits: number = 5, rightDigits: number = 2): string {
    return `${this.number(leftDigits)}.${this.decimalPart(rightDigits)}`;
  }

  public normal(mean: number = 1, standardDeviation: number = 1): number {
    const theta = 2 * Math.PI * Math.random();
    const rho = Math.sqrt(-2 * Math.log(1 - Math.random()));
    const scale = standardDeviation * rho;
    return mean + scale * Math.cos(theta);
  }

  public hexadecimal(digits: number = 6): string {
    return Array(digits)
      .fill(null)
      .map(_ => between(0, 15).toString(16))
      .join('');
  }

  public between(from: number = 1, to: number = 5000): number {
    const min = Math.min(from, to);
    const max = Math.max(from, to);
    return between(min, max);
  }

  public betweenF(from: number = 1.0, to: number = 5000.0): number {
    const min = Math.min(from, to);
    const max = Math.max(from, to);
    return betweenFloat(min, max);
  }

  public positive(from: number = 1.0, to: number = 5000.0): number {
    let value = this.between(from, to);
    return value < 0 ? (value *= -1) : value;
  }

  public negative(from: number = -1.0, to: number = -5000.0): number {
    let value = this.between(from, to);
    return value < 0 ? value : (value *= -1);
  }

  public digit(): number {
    return between(0, 9);
  }

  private nonZeroDigit(): number {
    return between(1, 9);
  }

  private decimalPart(digits: number): string {
    let num = '';
    if (digits > 1) {
      num = `${this.nonZeroDigit()}`;
      digits -= 1;
    }
    return this.leadingZeroNumber(digits) + num;
  }

  private leadingZeroNumber(digits: number): string {
    return Array(digits)
      .fill(null)
      .map(_ => between(0, 9))
      .join('');
  }
}
