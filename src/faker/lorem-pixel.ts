import { Faker } from '../faker';
const SUPPORTED_CATEGORIES = [
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

function isValidSize(size) {
  return /^\d+x\d+$/.test(size);
}

function isCategorySupported(category) {
  return !category || SUPPORTED_CATEGORIES.indexOf(category) >= 0;
}

function isNumberValid(number) {
  return number === null || Array(10).map(i => i + 1).indexOf(parseInt(number)) >= 0;
}

export class LoremPixel {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  image(size = '300x300', isGray = false, category = null, number = null, text = null) {
    if (!isValidSize(size)) {
      throw new Error('Size should be specified in format 300x300');
    }

    if (!isCategorySupported(category)) {
      throw new Error(`Supported categories are ${SUPPORTED_CATEGORIES.join(', ')}`);
    }

    if (!isNumberValid(number)) {
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
}
