import data from '../data/lorem.json';
import { Faker } from '../faker';
import { capitalize } from '../utils/text-helpers';

// 0-9, a-z
const CHARACTERS = '0123456789abcdefghijklmnopqrstuvwxyz';

export class Lorem {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public word(): string {
    return this.faker.Random.element(data.words);
  }

  public words(num: number = 3, supplemental: boolean = false): string[] {
    const wordList = supplemental ? [...data.words, data.supplemental] : data.words;
    const words = this.faker.Random.assortment(wordList, Math.max(0, num));
    return words;
  }

  public character(): string {
    return this.faker.Random.element(CHARACTERS);
  }

  public characters(charCount: number = 255): string {
    return Array(Math.max(0, charCount))
      .fill(null)
      .map(() => this.character())
      .join('');
  }

  public sentence(wordCount: number = 4, supplemental: boolean = false, randomWordsToAdd: number = 6): string {
    const text = capitalize(
      this.words(
        Math.max(0, wordCount) + this.faker.Number.between(0, Math.max(0, randomWordsToAdd)),
        supplemental,
      ).join(' '),
    );
    return text.length > 0 ? `${text}.` : text;
  }

  public sentences(sentenceCount: number = 3, supplemental: boolean = false): string[] {
    return Array(Math.max(0, sentenceCount))
      .fill(null)
      .map(_ => this.sentence(3, supplemental));
  }

  public paragraph(sentenceCount: number = 3, supplemental: boolean = false, randomSentencesToAdd: number = 3): string {
    return this.sentences(sentenceCount + this.faker.Number.between(0, randomSentencesToAdd), supplemental).join(' ');
  }

  public paragraphs(paragraphCount: number = 3, supplemental: boolean = false): string[] {
    return Array(Math.max(0, paragraphCount))
      .fill(null)
      .map(_ => this.paragraph(3, supplemental));
  }
}
