import { Faker } from '../faker';
import data from '../../data/compass.json';

export class Compass {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  direction(): string {
    return this.parse(this.faker.Random.element(data.directions));
  }

  cardinal(): string {
    return this.faker.Random.element(data.cardinals.word);
  }

  ordinal(): string {
    return this.faker.Random.element(data.ordinals.word);
  }

  halfWind(): string {
    return this.faker.Random.element(data.halfWinds.word);
  }

  quarterWind(): string {
    return this.faker.Random.element(data.quarterWinds.word);
  }

  abbreviation(): string {
    return this.parse(this.faker.Random.element(data.abbreviations));
  }

  cardinalAbbreviation(): string {
    return this.faker.Random.element(data.cardinals.abbreviation);
  }

  ordinalAbbreviation(): string {
    return this.faker.Random.element(data.ordinals.abbreviation);
  }

  halfWindAbbreviation(): string {
    return this.faker.Random.element(data.halfWinds.abbreviation);
  }

  quarterWindAbbreviation(): string {
    return this.faker.Random.element(data.quarterWinds.abbreviation);
  }

  azimuth(): string {
    return this.parse(this.faker.Random.element(data.azimuths));
  }

  cardinalAzimuth(): string {
    return this.faker.Random.element(data.cardinals.azimuth);
  }

  ordinalAzimuth(): string {
    return this.faker.Random.element(data.ordinals.azimuth);
  }

  halfWindAzimuth(): string {
    return this.faker.Random.element(data.halfWinds.azimuth);
  }

  quarterWindAzimuth(): string {
    return this.faker.Random.element(data.quarterWinds.azimuth);
  }

  private parse(format: string): string {
    const text = format.replace(/\{(\w+)\}/g, m => `{Compass.${m.substring(1)}`);
    return this.faker.Fake.f(text);
  }
}
