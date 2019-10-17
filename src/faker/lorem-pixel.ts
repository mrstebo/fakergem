import { Faker } from '../faker';

export class LoremPixel {
  private SUPPORTED_CATEGORIES: Array<string> = [
    'abstract',
    'animals',
    'business',
    'cats',
    'city',
    'food',
    'nightlife',
    'fashion',
    'people',
    'nature',
    'sports',
    'technics',
    'transport',
  ];

  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  image(
    size: string = '300x300',
    isGray: boolean = false,
    category: string | null = null,
    number: number | null = null,
    text: string | null = null
  ): string {
    if (!this.isValidSize(size)) {
      throw new Error('Size should be specified in format 300x300');
    }

    if (!this.isCategorySupported(category)) {
      throw new Error(`Supported categories are ${this.SUPPORTED_CATEGORIES.join(', ')}`);
    }

    if (!this.isNumberValid(number)) {
      throw new Error('Number must be between 1 and 10');
    }

    if (number && !category) {
      throw new Error('Category required when number is passed');
    }

    if (text && !category && !number) {
      throw new Error('Category and number must be passed when text is passed');
    }

    return [
      'http://lorempixel.com',
      isGray ? 'g' : null,
      size.replace(/x/, '/'),
      [category, number, text].filter(x => x).join('/'),
    ]
      .filter(x => x)
      .join('/');
  }

  private isValidSize(size: string): boolean {
    return /^\d+x\d+$/.test(size);
  }

  private isCategorySupported(category: string | null): boolean {
    return !category || this.SUPPORTED_CATEGORIES.indexOf(category) >= 0;
  }

  private isNumberValid(number: number | null): boolean {
    return number === null || Array(10).map(i => i + 1).indexOf(number) >= 0;
  }
}
