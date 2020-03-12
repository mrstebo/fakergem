import data from '../data/music.json';
import { Faker } from '../faker';

export class Music {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public key(): string {
    return [this.faker.Random.element(data.keys), this.faker.Random.element(data.keyVariants)].join('');
  }

  public chord(): string {
    return [this.faker.Random.element(data.keys), this.faker.Random.element(data.chordTypes)].join('');
  }

  public instrument(): string {
    return this.faker.Random.element(data.instruments);
  }
}
