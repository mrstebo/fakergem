import data from '../data/hacker.json';
import { Faker } from '../faker';

export class Hacker {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public saySomethingSmart(): string {
    return this.parse(this.faker.Random.element(data.phrases));
  }

  public abbreviation(): string {
    return this.faker.Random.element(data.abbreviations);
  }

  public adjective(): string {
    return this.faker.Random.element(data.adjectives);
  }

  public noun(): string {
    return this.faker.Random.element(data.nouns);
  }

  public verb(): string {
    return this.faker.Random.element(data.verbs);
  }

  public ingverb(): string {
    return this.faker.Random.element(data.ingverbs);
  }

  private parse(format: string): string {
    const text = format.replace(/\{(\w+)\}/g, m => `{Hacker.${m.substring(1)}`);
    return this.faker.Fake.f(text).replace(/^(\w)/, m => m[0].toUpperCase());
  }
}
