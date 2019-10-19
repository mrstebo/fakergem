import { Faker } from '../faker';

export class LoremFlickr {
  private SUPPORTED_COLORIZATIONS: Array<string> = ['red', 'green', 'blue'];

  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  image(size: string = '300x300', searchTerms: Array<string> = [], matchAll: boolean = false): string {
    return this.buildUrl(size, null, searchTerms, matchAll);
  }

  grayscaleImage(size: string = '300x300', searchTerms: Array<string> = ['all'], matchAll: boolean = false): string {
    if (!this.hasSearchTerms(searchTerms)) {
      throw new Error('Search terms must be specified for grayscale images');
    }

    return this.buildUrl(size, 'g', searchTerms, matchAll);
  }

  pixelatedImage(size: string = '300x300', searchTerms: Array<string> = ['all'], matchAll: boolean = false): string {
    if (!this.hasSearchTerms(searchTerms)) {
      throw new Error('Search terms must be specified for pixelated images');
    }

    return this.buildUrl(size, 'p', searchTerms, matchAll);
  }

  colorizedImage(
    size: string = '300x300',
    color: string = 'red',
    searchTerms: Array<string> = ['all'],
    matchAll: boolean = false,
  ): string {
    if (!this.hasSearchTerms(searchTerms)) {
      throw new Error('Search terms must be specified for colorized images');
    }
    if (!this.isColorizationSupported(color)) {
      throw new Error(`Supported colorizations are ${this.SUPPORTED_COLORIZATIONS.join(', ')}`);
    }

    return this.buildUrl(size, color, searchTerms, matchAll);
  }

  private buildUrl(size: string, format: string | null, searchTerms: Array<string>, matchAll: boolean): string {
    if (!this.isValidSize(size)) {
      throw new Error('Size should be specified in format 300x300');
    }

    let url = 'http://loremflickr.com';
    if (format) {
      url += `/${format}`;
    }
    url += `/${size.replace('x', '/')}`;
    if ((searchTerms || []).length > 0) {
      url += `/${searchTerms.join(',')}`;
    }
    if (matchAll) {
      url += '/all';
    }
    return url;
  }

  private hasSearchTerms(searchTerms: Array<string>): boolean {
    return (searchTerms || []).length > 0;
  }

  private isColorizationSupported(color: string): boolean {
    return this.SUPPORTED_COLORIZATIONS.indexOf(color) >= 0;
  }

  private isValidSize(size: string): boolean {
    return /^\d+x\d+$/.test(size);
  }
}
