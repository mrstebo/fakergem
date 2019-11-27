const data = require("../../data/address.json");

function parse(faker, format) {
  const text = format
    .replace(/\{(\w+)\}/g, m => `{Address.${m.substring(1)}`)
    .replace(/#/, faker.Number.between(1, 9));
  return faker.Fake.f(text);
}

class Address {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  /**
   * @returns {string}
   */
  city() {
    const format = this.faker.Random.element(data["cities"]);
    return parse(this.faker, format);
  }

  /**
   * @returns {string}
   */
  streetName() {
    const format = this.faker.Random.element(data["streetNames"]);
    return parse(this.faker, format);
  }

  /**
   * @returns {string}
   */
  streetAddress() {
    const format = this.faker.Random.element(data["streetAddresses"]);
    return parse(this.faker, format);
  }

  /**
   * @returns {string}
   */
  secondaryAddress() {
    const prefix = this.faker.Random.element(data["secondaryAddressPrefixes"]);
    const format = `${prefix} ###`;
    return parse(this.faker, format);
  }

  /**
   * @returns {string}
   */
  buildingNumber() {
    return ""+this.faker.Number.between(100, 99999);
  }

  /**
   * @returns {string}
   */
  zipCode(stateAbbreviation = "") {
    const format = stateAbbreviation == ""
      ? this.faker.Random.element(data["postcodes"])
      : data["postcodeByState"][stateAbbreviation];
    return parse(this.faker, format);
  }

  /**
   * @returns {string}
   */
  zip(stateAbbreviation = "") {
    return this.zipCode(stateAbbreviation);
  }

  /**
   * @returns {string}
   */
  postcode(stateAbbreviation = "") {
    return this.zipCode(stateAbbreviation);
  }

  /**
   * @returns {string}
   */
  timeZone() {
    return this.faker.Random.element(data["timeZones"]);
  }

  /**
   * @returns {string}
   */
  streetSuffix() {
    return this.faker.Random.element(data["streetSuffixes"]);
  }

  /**
   * @returns {string}
   */
  citySuffix() {
    return this.faker.Random.element(data["citySuffixes"]);
  }

  /**
   * @returns {string}
   */
  cityPrefix() {
    return this.faker.Random.element(data["cityPrefixes"]);
  }

  /**
   * @returns {string}
   */
  state() {
    return this.faker.Random.element(data["states"]);
  }

  /**
   * @returns {string}
   */
  stateAbbr() {
    return this.faker.Random.element(data["stateAbbreviations"]);
  }

  /**
   * @returns {string}
   */
  country() {
    return this.faker.Random.element(data["countries"]);
  }

  /**
   * @returns {string}
   */
  countryCode() {
    return this.faker.Random.element(data["countryCodes"]);
  }

  /**
   * @returns {string}
   */
  latitude() {
    return ""+(this.faker.Number.betweenF(0.00, 180.00) - 90);
  }

  /**
   * @returns {string}
   */
  longitude() {
    return ""+(this.faker.Number.betweenF(0.00, 360.00) - 180);
  }

}

module.exports = Address;
