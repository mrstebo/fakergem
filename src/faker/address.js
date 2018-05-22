const data = require('../../data/address.json');

function parseFormat(faker, format) {
  const text = format
    .replace(/\{(\w+)\}/g, m => `{Address.${m.substring(1)}`)
    .replace(/#/, faker.Number.between(1, 9));
  return faker.Fake.f(text);
}

export default class Address {
  constructor(faker) {
    this.faker = faker;
  }

  city() {
    const format = this.faker.Random.element(data['cities']);
    return parseFormat(this.faker, format);
  }

  streetName() {
    const format = this.faker.Random.element(data['streetNames']);
    return parseFormat(this.faker, format);
  }

  streetAddress() {
    const format = this.faker.Random.element(data['streetAddresses']);
    return parseFormat(this.faker, format);
  }

  secondaryAddress() {
    const prefix = this.faker.Random.element(data['secondaryAddressPrefixes']);
    const format = `${prefix} ###`;
    return parseFormat(this.faker, format);
  }

  buildingNumber() {
    return ''+this.faker.Number.between(100, 99999);
  }

  zipCode(stateAbbreviation = '') {
    const format = stateAbbreviation == ''
      ? this.faker.Random.element(data['postcodes'])
      : data['postcodeByState'][stateAbbreviation];
    return parseFormat(this.faker, format);
  }

  zip(stateAbbreviation = '') {
    return this.zipCode(stateAbbreviation);
  }

  postcode(stateAbbreviation = '') {
    return this.zipCode(stateAbbreviation);
  }

  timeZone() {
    return this.faker.Random.element(data['timeZones']);
  }

  streetSuffix() {
    return this.faker.Random.element(data['streetSuffixes']);
  }

  citySuffix() {
    return this.faker.Random.element(data['citySuffixes']);
  }

  cityPrefix() {
    return this.faker.Random.element(data['cityPrefixes']);
  }

  state() {
    return this.faker.Random.element(data['states']);
  }

  stateAbbr() {
    return this.faker.Random.element(data['stateAbbreviations']);
  }

  country() {
    return this.faker.Random.element(data['countries']);
  }

  countryCode() {
    return this.faker.Random.element(data['countryCodes']);
  }

  latitude() {
    return ''+(this.faker.Number.betweenF(0.00, 180.00) - 90);
  }

  longitude() {
    return ''+(this.faker.Number.betweenF(0.00, 360.00) - 180);
  }
}
