import data from '../data/compass.json';
import { Faker } from '../faker';

export class Compass {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public direction(): string {
    return this.parse(this.faker.Random.element(data.directions));
  }

  public cardinal(): string {
    return this.faker.Random.element(data.cardinals.word);
  }

  public ordinal(): string {
    return this.faker.Random.element(data.ordinals.word);
  }

  public halfWind(): string {
    return this.faker.Random.element(data.halfWinds.word);
  }

  public quarterWind(): string {
    return this.faker.Random.element(data.quarterWinds.word);
  }

  public abbreviation(): string {
    return this.parse(this.faker.Random.element(data.abbreviations));
  }

  public cardinalAbbreviation(): string {
    return this.faker.Random.element(data.cardinals.abbreviation);
  }

  public ordinalAbbreviation(): string {
    return this.faker.Random.element(data.ordinals.abbreviation);
  }

  public halfWindAbbreviation(): string {
    return this.faker.Random.element(data.halfWinds.abbreviation);
  }

  public quarterWindAbbreviation(): string {
    return this.faker.Random.element(data.quarterWinds.abbreviation);
  }

  public azimuth(): string {
    return this.parse(this.faker.Random.element(data.azimuths));
  }

  public cardinalAzimuth(): string {
    return this.faker.Random.element(data.cardinals.azimuth);
  }

  public ordinalAzimuth(): string {
    return this.faker.Random.element(data.ordinals.azimuth);
  }

  public halfWindAzimuth(): string {
    return this.faker.Random.element(data.halfWinds.azimuth);
  }

  public quarterWindAzimuth(): string {
    return this.faker.Random.element(data.quarterWinds.azimuth);
  }

  private parse(format: string): string {
    const text = format.replace(/\{(\w+)\}/g, m => `{Compass.${m.substring(1)}`);
    return this.faker.Fake.f(text);
  }
}
