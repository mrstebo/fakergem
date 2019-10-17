import { Faker } from '../faker';

export class Placeholdit {
  private SUPPORTED_FORMATS: Array<string> = ['png', 'jpg', 'gif', 'jpeg'];

  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  image(
    size: string = '300x300',
    format: string = 'png',
    backgroundColor: string | null = null,
    textColor: string | null = null,
    text: string | null = null,
  ): string {
    if (!this.isValidSize(size)) {
      throw new Error('Size should be specified in format 300x300');
    }
    if (!this.isSupportedFormat(format)) {
      throw new Error(`Supported formats are ${this.SUPPORTED_FORMATS.join(', ')}`);
    }
    if (!this.isValidColorValue(backgroundColor)) {
      throw new Error("backgroundColor must be a hex value without '#'");
    }
    if (!this.isValidColorValue(textColor)) {
      throw new Error("textColor must be a hex value without '#'");
    }

    let url = `https://placehold.it/${size}.${format}`;
    if (backgroundColor) {
      url += `/${backgroundColor}`;
    }
    if (textColor) {
      url += `/${textColor}`;
    }
    if (text) {
      url += `?text=${text}`;
    }
    return url;
  }

  private isValidSize(size: string): boolean {
    return /^\d+x\d+$/.test(size);
  }

  private isSupportedFormat(format: string): boolean {
    return this.SUPPORTED_FORMATS.indexOf(format) >= 0;
  }

  private isValidColorValue(color: string | null): boolean {
    if (color) {
      return new RegExp(/(?:^[0-9a-f]{3}$)|(?:^[0-9a-f]{6}$)/.source, 'i').test(color);
    }
    return true;
  }
}
