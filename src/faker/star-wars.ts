import { Faker } from '../faker';
import data from '../../data/star-wars.json';

function capitalize(text) {
  return text.replace(/\b\w/, x => x.toUpperCase());
}

export class StarWars {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  character() {
    return this.faker.Random.element(data.characters);
  }

  droid() {
    return this.faker.Random.element(data.droids);
  }

  planet() {
    return this.faker.Random.element(data.planets);
  }

  quote() {
    return this.faker.Random.element(data.quotes);
  }

  specie() {
    return this.faker.Random.element(data.species);
  }

  vehicle() {
    return this.faker.Random.element(data.vehicles);
  }

  wookieSentence() {
    return capitalize(
      [...Array(this.faker.Number.between(1, 10)).keys()]
        .map(_ => this.faker.Random.element(data.wookieWords))
        .join(' ') + this.faker.Random.element(['.', '?', '!']),
    );
  }
}
