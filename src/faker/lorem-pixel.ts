import { Faker } from '../faker';

export class LoremPixel {
  private SUPPORTED_CATEGORIES: string[] = [
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

  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public image(
    size: string = '300x300',
    isGray: boolean = false,
    category: string | null = null,
    num: number | null = null,
    text: string | null = null,
  ): string {
    if (!this.isValidSize(size)) {
      throw new Error('Size should be specified in format 300x300');
    }

    if (!this.isCategorySupported(category)) {
      throw new Error(`Supported categories are ${this.SUPPORTED_CATEGORIES.join(', ')}`);
    }

    if (!this.isNumberValid(num)) {
      throw new Error('Number must be between 1 and 10');
    }

    if (num && !category) {
      throw new Error('Category required when number is passed');
    }

    if (text && !category && !num) {
      throw new Error('Category and number must be passed when text is passed');
    }

    return [
      'http://lorempixel.com',
      isGray ? 'g' : null,
      size.replace(/x/, '/'),
      [category, num, text].filter(x => x).join('/'),
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

  private isNumberValid(num: number | null): boolean {
    return (
      num === null ||
      Array(10)
        .fill(null)
        .map((_, i) => i + 1)
        .indexOf(num) >= 0
    );
  }
}
