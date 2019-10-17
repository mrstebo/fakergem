import { Faker } from '../faker';
import data from '../data/music.json';

export class Music {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  key(): string {
    return [this.faker.Random.element(data.keys), this.faker.Random.element(data.keyVariants)].join('');
  }

  chord(): string {
    return [this.faker.Random.element(data.keys), this.faker.Random.element(data.chordTypes)].join('');
  }

  instrument(): string {
    return this.faker.Random.element(data.instruments);
  }
}
