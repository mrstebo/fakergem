import { Faker } from '../faker';

export class Fillmurray {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  image(grayscale: boolean | string = false, width: number | string = 200, height: number | string = 200): string {
    if (!this.isValidNumber(width)) {
      throw new Error('Width should be a number');
    }
    if (!this.isValidNumber(height)) {
      throw new Error('Height should be a number');
    }
    if (!this.isValidBoolean(grayscale)) {
      throw new Error('Grayscale should be a boolean');
    }

    return ['https://fillmurray.com', grayscale ? 'g' : null, width, height].filter(x => x).join('/');
  }

  private isValidNumber(value: number | string): boolean {
    return /^\d+$/.test(value.toString());
  }

  private isValidBoolean(value: boolean | string): boolean {
    return /(true|false)/.test(value.toString());
  }
}
