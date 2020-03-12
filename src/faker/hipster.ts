import data from '../data/hipster.json';
import loremData from '../data/lorem.json';
import { Faker } from '../faker';
import { resolveNumber } from '../utils/number-helpers';
import { capitalize } from '../utils/text-helpers';

export class Hipster {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public word(): string {
    const item = this.faker.Random.element(data.words);
    return item.match(/\s/) ? this.word() : item; // Make sure we get a single word
  }

  public words(num: number = 3, supplemental: boolean = false, spacesAllowed: boolean = false): string[] {
    const wordList = supplemental ? [...data.words, loremData.words] : data.words;
    const words = this.faker.Random.assortment(wordList, resolveNumber(num));
    return spacesAllowed ? words : words.map(x => (`${x}`.match(/\s/) ? this.word() : x));
  }

  public sentence(wordCount: number = 4, supplemental: boolean = false, randomWordsToAdd: number = 6): string {
    const words = this.words(
      resolveNumber(wordCount) + this.faker.Number.between(0, randomWordsToAdd),
      supplemental,
      true,
    );
    const text = capitalize(words.join(' '));
    return text.length > 0 ? `${text}.` : text;
  }

  public sentences(sentenceCount: number = 3, supplemental: boolean = false): string[] {
    return Array(resolveNumber(sentenceCount))
      .fill(null)
      .map(_ => this.sentence(3, supplemental));
  }

  public paragraph(sentenceCount: number = 3, supplemental: boolean = false, randomSentencesToAdd: number = 3): string {
    return this.sentences(
      resolveNumber(sentenceCount) + this.faker.Number.between(0, randomSentencesToAdd),
      supplemental,
    ).join(' ');
  }

  public paragraphs(paragraphCount: number = 3, supplemental: boolean = false): string[] {
    return Array(resolveNumber(paragraphCount))
      .fill(null)
      .map(_ => this.paragraph(3, supplemental));
  }
}
