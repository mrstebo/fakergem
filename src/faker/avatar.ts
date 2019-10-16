import { Faker } from '../faker';

export class Avatar {
  private SUPPORTED_FORMATS: Array<string> = ['png', 'jpg', 'bmp'];

  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  image(
    slug: null | string = null,
    size: string = '300x300',
    format: string = 'png',
    set: string = 'set1',
    bgset: null | string = null
  ): string {
    if (!this.isValidSize(size)) {
      throw new Error('Size should be specified in format 300x300');
    }
    if (!this.isFormatSupported(format)) {
      throw new Error(`Supported formats are ${this.SUPPORTED_FORMATS.join(', ')}`);
    }
    const filename = `${slug || this.words()}.${format}`;
    const bgsetQuery = bgset ? `&bgset=${bgset}` : '';

    return `https://robohash.org/${filename}?size=${size}&set=${set}${bgsetQuery}`;
  }

  private isValidSize(size: string): boolean {
    return /^\d+x\d+$/.test(size);
  }

  private isFormatSupported(format: string): boolean {
    return this.SUPPORTED_FORMATS.indexOf(format) >= 0;
  }

  private words(): string {
    return this.faker.Lorem.words(3).join('-');
  }
}
