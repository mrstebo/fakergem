import { Faker } from '../faker';
import data from '../data/lorem.json';
import { capitalize } from '../utils/text-helpers';
import { resolveNumber } from '../utils/number-helpers';

// 0-9, a-z
const CHARACTERS = Array(10).concat([...Array(26).fill(null).map(i => String.fromCharCode(97 + i))]);

export class Lorem {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  word(): string {
    return this.faker.Random.element(data.words);
  }

  words(
    num: number = 3,
    supplemental: boolean = false
  ): Array<string> {
    const wordList = supplemental ? [...data.words, data.supplemental] : data.words;
    const words = this.faker.Random.assortment(wordList, resolveNumber(num));
    return words;
  }

  character(): string {
    return this.faker.Random.element(CHARACTERS);
  }

  characters(
    charCount: number = 255
  ): Array<string> {
    return Array(resolveNumber(charCount)).fill(null).map(_ => this.character());
  }

  sentence(
    wordCount: number = 4,
    supplemental: boolean = false,
    randomWordsToAdd: number = 6
  ): string {
    const text = capitalize(
      this.words(resolveNumber(wordCount) + this.faker.Number.between(0, randomWordsToAdd), supplemental).join(' '),
    );
    return text.length > 0 ? `${text}.` : text;
  }

  sentences(
    sentenceCount: number = 3,
    supplemental: boolean = false
  ): Array<string> {
    return Array(resolveNumber(sentenceCount)).fill(null).map(_ => this.sentence(3, supplemental));
  }

  paragraph(
    sentenceCount: number = 3,
    supplemental: boolean = false,
    randomSentencesToAdd: number = 3
  ): string {
    return this.sentences(
      resolveNumber(sentenceCount) + this.faker.Number.between(0, randomSentencesToAdd),
      supplemental,
    ).join(' ');
  }

  paragraphs(
    paragraphCount: number = 3,
    supplemental: boolean = false
  ): Array<string> {
    return Array(resolveNumber(paragraphCount)).fill(null).map(_ => this.paragraph(3, supplemental));
  }
}
