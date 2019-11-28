import data from '../data/address.json';
import { Faker } from '../faker';

export class Address {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public city(): string {
    const format = this.faker.Random.element(data.cities);
    return this.parse(this.faker, format);
  }

  public streetName(): string {
    const format = this.faker.Random.element(data.streetNames);
    return this.parse(this.faker, format);
  }

  public streetAddress(): string {
    const format = this.faker.Random.element(data.streetAddresses);
    return this.parse(this.faker, format);
  }

  public secondaryAddress(): string {
    const prefix = this.faker.Random.element(data.secondaryAddressPrefixes);
    const format = `${prefix} ###`;
    return this.parse(this.faker, format);
  }

  public buildingNumber(): string {
    return '' + this.faker.Number.between(100, 99999);
  }

  public zipCode(stateAbbreviation = ''): string {
    const format =
      stateAbbreviation === ''
        ? this.faker.Random.element(data.postcodes)
        : (data.postcodeByState as { [key: string]: any })[stateAbbreviation];
    return this.parse(this.faker, format);
  }

  public zip(stateAbbreviation = ''): string {
    return this.zipCode(stateAbbreviation);
  }

  public postcode(stateAbbreviation = ''): string {
    return this.zipCode(stateAbbreviation);
  }

  public timeZone(): string {
    return this.faker.Random.element(data.timeZones);
  }

  public streetSuffix(): string {
    return this.faker.Random.element(data.streetSuffixes);
  }

  public citySuffix(): string {
    return this.faker.Random.element(data.citySuffixes);
  }

  public cityPrefix(): string {
    return this.faker.Random.element(data.cityPrefixes);
  }

  public state(): string {
    return this.faker.Random.element(data.states);
  }

  public stateAbbr(): string {
    return this.faker.Random.element(data.stateAbbreviations);
  }

  public country(): string {
    return this.faker.Random.element(data.countries);
  }

  public countryCode(): string {
    return this.faker.Random.element(data.countryCodes);
  }

  public latitude(): string {
    return '' + (this.faker.Number.betweenF(0.0, 180.0) - 90);
  }

  public longitude(): string {
    return '' + (this.faker.Number.betweenF(0.0, 360.0) - 180);
  }

  private parse(faker: Faker, format: string): string {
    const text = format
      .replace(/\{(\w+)\}/g, m => `{Address.${m.substring(1)}`)
      .replace(/#/, faker.Number.between(1, 9).toString());
    return faker.Fake.f(text);
  }
}
