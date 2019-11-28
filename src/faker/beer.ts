import data from '../data/beer.json';
import { Faker } from '../faker';

export class Beer {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public name(): string {
    return this.faker.Random.element(data.names);
  }

  public style(): string {
    return this.faker.Random.element(data.styles);
  }

  public hop(): string {
    return this.faker.Random.element(data.hops);
  }

  public yeast(): string {
    return this.faker.Random.element(data.yeasts);
  }

  public malt(): string {
    return this.faker.Random.element(data.malts);
  }

  public ibu(): string {
    return `${this.faker.Number.between(10, 99)} IBU`;
  }

  public alcohol(): string {
    return `${this.faker.Number.betweenF(2.0, 10.0).toFixed(1)}%`;
  }

  public blg(): string {
    return `${this.faker.Number.betweenF(2.0, 10.0).toFixed(1)}°Blg`;
  }
}
