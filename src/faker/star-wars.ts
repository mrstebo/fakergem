import { Faker } from '../faker';
import data from '../../data/star-wars.json';
import { capitalize } from '../utils/text-helpers';

export class StarWars {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  character(): string {
    return this.faker.Random.element(data.characters);
  }

  droid(): string {
    return this.faker.Random.element(data.droids);
  }

  planet(): string {
    return this.faker.Random.element(data.planets);
  }

  quote(): string {
    return this.faker.Random.element(data.quotes);
  }

  specie(): string {
    return this.faker.Random.element(data.species);
  }

  vehicle(): string {
    return this.faker.Random.element(data.vehicles);
  }

  wookieSentence(): string {
    return capitalize(
      Array(this.faker.Number.between(1, 10))
        .map(_ => this.faker.Random.element(data.wookieWords))
        .join(' ') + this.faker.Random.element(['.', '?', '!']),
    );
  }
}
