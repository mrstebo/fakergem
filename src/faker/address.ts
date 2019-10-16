import { Faker } from '../faker';
import data from '../../data/address.json';

function parse(faker: Faker, format: string) {
  const text = format.replace(/\{(\w+)\}/g, m => `{Address.${m.substring(1)}`).replace(/#/, faker.Number.between(1, 9));
  return faker.Fake.f(text);
}

export class Address {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  city(): string {
    const format = this.faker.Random.element(data['cities']);
    return parse(this.faker, format);
  }

  streetName(): string {
    const format = this.faker.Random.element(data['streetNames']);
    return parse(this.faker, format);
  }

  streetAddress(): string {
    const format = this.faker.Random.element(data['streetAddresses']);
    return parse(this.faker, format);
  }

  secondaryAddress(): string {
    const prefix = this.faker.Random.element(data['secondaryAddressPrefixes']);
    const format = `${prefix} ###`;
    return parse(this.faker, format);
  }

  buildingNumber(): string {
    return '' + this.faker.Number.between(100, 99999);
  }

  zipCode(stateAbbreviation = ''): string {
    const format =
      stateAbbreviation == ''
        ? this.faker.Random.element(data['postcodes'])
        : data['postcodeByState'][stateAbbreviation];
    return parse(this.faker, format);
  }

  zip(stateAbbreviation = ''): string {
    return this.zipCode(stateAbbreviation);
  }

  postcode(stateAbbreviation = ''): string {
    return this.zipCode(stateAbbreviation);
  }

  timeZone(): string {
    return this.faker.Random.element(data['timeZones']);
  }

  streetSuffix(): string {
    return this.faker.Random.element(data['streetSuffixes']);
  }

  citySuffix(): string {
    return this.faker.Random.element(data['citySuffixes']);
  }

  cityPrefix(): string {
    return this.faker.Random.element(data['cityPrefixes']);
  }

  state(): string {
    return this.faker.Random.element(data['states']);
  }

  stateAbbr(): string {
    return this.faker.Random.element(data['stateAbbreviations']);
  }

  country(): string {
    return this.faker.Random.element(data['countries']);
  }

  countryCode(): string {
    return this.faker.Random.element(data['countryCodes']);
  }

  latitude(): string {
    return '' + (this.faker.Number.betweenF(0.0, 180.0) - 90);
  }

  longitude(): string {
    return '' + (this.faker.Number.betweenF(0.0, 360.0) - 180);
  }
}
