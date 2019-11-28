import data from '../data/star-wars.json';
import { Faker } from '../faker';
import { capitalize } from '../utils/text-helpers';

export class StarWars {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public character(): string {
    return this.faker.Random.element(data.characters);
  }

  public droid(): string {
    return this.faker.Random.element(data.droids);
  }

  public planet(): string {
    return this.faker.Random.element(data.planets);
  }

  public quote(): string {
    return this.faker.Random.element(data.quotes);
  }

  public specie(): string {
    return this.faker.Random.element(data.species);
  }

  public vehicle(): string {
    return this.faker.Random.element(data.vehicles);
  }

  public wookieSentence(): string {
    return capitalize(
      Array(this.faker.Number.between(1, 10))
        .fill(null)
        .map(_ => this.faker.Random.element(data.wookieWords))
        .join(' ') + this.faker.Random.element(['.', '?', '!']),
    );
  }
}
