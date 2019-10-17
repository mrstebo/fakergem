import { Faker } from '../faker';
import { between, betweenFloat } from '../utils/number-helpers';

export class Number {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  number(digits: number = 10): number {
    let num = '';
    if (digits > 1) {
      num = `${this.nonZeroDigit()}`;
      digits -= 1;
    }
    return parseInt(num + this.leadingZeroNumber(digits));
  }

  decimal(leftDigits: number = 5, rightDigits: number = 2): string {
    return `${this.number(leftDigits)}.${this.decimalPart(rightDigits)}`;
  }

  normal(mean: number = 1, standardDeviation: number = 1): number {
    let theta = 2 * Math.PI * Math.random();
    let rho = Math.sqrt(-2 * Math.log(1 - Math.random()));
    let scale = standardDeviation * rho;
    return mean + scale * Math.cos(theta);
  }

  hexadecimal(digits: number = 6): string {
    return Array(digits)
      .fill(null)
      .map(_ => between(0, 15).toString(16))
      .join('');
  }

  between(from: number = 1, to: number = 5000): number {
    let min = Math.min(from, to);
    let max = Math.max(from, to);
    return between(min, max);
  }

  betweenF(from: number = 1.0, to: number = 5000.0): number {
    let min = Math.min(from, to);
    let max = Math.max(from, to);
    return betweenFloat(min, max);
  }

  positive(from: number = 1.0, to: number = 5000.0): number {
    let value = this.between(from, to);
    return value < 0 ? (value *= -1) : value;
  }

  negative(from: number = -1.0, to: number = -5000.0): number {
    let value = this.between(from, to);
    return value < 0 ? value : (value *= -1);
  }

  digit(): number {
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
