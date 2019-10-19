import { Faker } from '../faker';
import data from '../data/hipster.json';
import loremData from '../data/lorem.json';
import { capitalize } from '../utils/text-helpers';
import { resolveNumber } from '../utils/number-helpers';

export class Hipster {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  word(): string {
    const item = this.faker.Random.element(data.words);
    return item.match(/\s/) ? this.word() : item; // Make sure we get a single word
  }

  words(num: number = 3, supplemental: boolean = false, spacesAllowed: boolean = false): Array<string> {
    const wordList = supplemental ? [...data.words, loremData.words] : data.words;
    const words = this.faker.Random.assortment(wordList, resolveNumber(num));
    return spacesAllowed ? words : words.map(x => (`${x}`.match(/\s/) ? this.word() : x));
  }

  sentence(wordCount: number = 4, supplemental: boolean = false, randomWordsToAdd: number = 6): string {
    const words = this.words(
      resolveNumber(wordCount) + this.faker.Number.between(0, randomWordsToAdd),
      supplemental,
      true,
    );
    const text = capitalize(words.join(' '));
    return text.length > 0 ? `${text}.` : text;
  }

  sentences(sentenceCount: number = 3, supplemental: boolean = false): Array<string> {
    return Array(resolveNumber(sentenceCount))
      .fill(null)
      .map(_ => this.sentence(3, supplemental));
  }

  paragraph(sentenceCount: number = 3, supplemental: boolean = false, randomSentencesToAdd: number = 3): string {
    return this.sentences(
      resolveNumber(sentenceCount) + this.faker.Number.between(0, randomSentencesToAdd),
      supplemental,
    ).join(' ');
  }

  paragraphs(paragraphCount: number = 3, supplemental: boolean = false): Array<string> {
    return Array(resolveNumber(paragraphCount))
      .fill(null)
      .map(_ => this.paragraph(3, supplemental));
  }
}
