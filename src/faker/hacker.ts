import { Faker } from '../faker';
import data from '../../data/hacker.json';

function parse(faker, format) {
  const text = format.replace(/\{(\w+)\}/g, m => `{Hacker.${m.substring(1)}`);
  return faker.Fake.f(text).replace(/^(\w)/, m => m[0].toUpperCase());
}

export class Hacker {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  saySomethingSmart(): string {
    return parse(this.faker, this.faker.Random.element(data.phrases));
  }

  abbreviation(): string {
    return this.faker.Random.element(data.abbreviations);
  }

  adjective(): string {
    return this.faker.Random.element(data.adjectives);
  }

  noun(): string {
    return this.faker.Random.element(data.nouns);
  }

  verb(): string {
    return this.faker.Random.element(data.verbs);
  }

  ingverb(): string {
    return this.faker.Random.element(data.ingverbs);
  }
}
