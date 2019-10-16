import { Faker } from '../faker';
import data from '../../data/beer.json';

export class Beer {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name(): string {
    return this.faker.Random.element(data.names);
  }

  style(): string {
    return this.faker.Random.element(data.styles);
  }

  hop(): string {
    return this.faker.Random.element(data.hops);
  }

  yeast(): string {
    return this.faker.Random.element(data.yeasts);
  }

  malt(): string {
    return this.faker.Random.element(data.malts);
  }

  ibu(): string {
    return `${this.faker.Number.between(10, 99)} IBU`;
  }

  alcohol(): string {
    return `${this.faker.Number.betweenF(2.0, 10.0).toFixed(1)}%`;
  }

  blg(): string {
    return `${this.faker.Number.betweenF(2.0, 10.0).toFixed(1)}°Blg`;
  }
}
