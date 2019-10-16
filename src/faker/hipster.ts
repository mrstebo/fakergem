import { Faker } from '../faker';
import data from '../../data/hipster.json';
import loremData from '../../data/lorem.json';

function resolveNumber(n) {
  return Math.max(parseInt(n), 0);
}

function capitalize(text) {
  return text.replace(/\b\w/, x => x.toUpperCase());
}

export class Hipster {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  word() {
    const item = this.faker.Random.element(data.words);
    return item.match(/\s/) ? this.word() : item; // Make sure we get a single word
  }

  words(num = 3, supplemental = false, spacesAllowed = false) {
    const wordList = supplemental ? [...data.words, loremdata.words] : data.words;
    const words = this.faker.Random.assortment(wordList, resolveNumber(num));
    return spacesAllowed ? words : words.map(x => (`${x}`.match(/\s/) ? this.word() : x));
  }

  sentence(wordCount = 4, supplemental = false, randomWordsToAdd = 6) {
    const words = this.words(
      resolveNumber(wordCount) + this.faker.Number.between(0, randomWordsToAdd),
      supplemental,
      true,
    );
    const text = capitalize(words.join(' '));
    return text.length > 0 ? `${text}.` : text;
  }

  sentences(sentenceCount = 3, supplemental = false) {
    return [...Array(resolveNumber(sentenceCount)).keys()].map(_ => this.sentence(3, supplemental));
  }

  paragraph(sentenceCount = 3, supplemental = false, randomSentencesToAdd = 3) {
    return this.sentences(
      resolveNumber(sentenceCount) + this.faker.Number.between(0, randomSentencesToAdd),
      supplemental,
    ).join(' ');
  }

  paragraphs(paragraphCount = 3, supplemental = false) {
    return [...Array(resolveNumber(paragraphCount)).keys()].map(_ => this.paragraph(3, supplemental));
  }
}
