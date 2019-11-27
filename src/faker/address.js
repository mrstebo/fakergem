const data = require("../../data/address.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Address(faker) {

  function parse(format) {
    const text = format
      .replace(/\{(\w+)\}/g, m => `{Address.${m.substring(1)}`)
      .replace(/#/, faker.Number.between(1, 9));
    return faker.Fake.f(text);
  }

  /**
   * @returns {string}
   */
  this.city = function() {
    const format = faker.Random.element(data["cities"]);
    return parse(format);
  };

  /**
   * @returns {string}
   */
  this.streetName = function() {
    const format = faker.Random.element(data["streetNames"]);
    return parse(format);
  };

  /**
   * @returns {string}
   */
  this.streetAddress = function() {
    const format = faker.Random.element(data["streetAddresses"]);
    return parse(format);
  };

  /**
   * @returns {string}
   */
  this.secondaryAddress = function() {
    const prefix = faker.Random.element(data["secondaryAddressPrefixes"]);
    const format = `${prefix} ###`;
    return parse(format);
  };

  /**
   * @returns {string}
   */
  this.buildingNumber = function() {
    return ""+faker.Number.between(100, 99999);
  };

  /**
   * @returns {string}
   */
  this.zipCode = function(stateAbbreviation = "") {
    const format = stateAbbreviation == ""
      ? faker.Random.element(data["postcodes"])
      : data["postcodeByState"][stateAbbreviation];
    return parse(format);
  };

  /**
   * @returns {string}
   */
  this.zip = function(stateAbbreviation = "") {
    return this.zipCode(stateAbbreviation);
  };

  /**
   * @returns {string}
   */
  this.postcode = function(stateAbbreviation = "") {
    return this.zipCode(stateAbbreviation);
  };

  /**
   * @returns {string}
   */
  this.timeZone = function() {
    return faker.Random.element(data["timeZones"]);
  };

  /**
   * @returns {string}
   */
  this.streetSuffix = function() {
    return faker.Random.element(data["streetSuffixes"]);
  };

  /**
   * @returns {string}
   */
  this.citySuffix = function() {
    return faker.Random.element(data["citySuffixes"]);
  };

  /**
   * @returns {string}
   */
  this.cityPrefix = function() {
    return faker.Random.element(data["cityPrefixes"]);
  };

  /**
   * @returns {string}
   */
  this.state = function() {
    return faker.Random.element(data["states"]);
  };

  /**
   * @returns {string}
   */
  this.stateAbbr = function() {
    return faker.Random.element(data["stateAbbreviations"]);
  };

  /**
   * @returns {string}
   */
  this.country = function() {
    return faker.Random.element(data["countries"]);
  };

  /**
   * @returns {string}
   */
  this.countryCode = function() {
    return faker.Random.element(data["countryCodes"]);
  };

  /**
   * @returns {string}
   */
  this.latitude = function() {
    return ""+(faker.Number.betweenF(0.00, 180.00) - 90);
  };

  /**
   * @returns {string}
   */
  this.longitude = function() {
    return ""+(faker.Number.betweenF(0.00, 360.00) - 180);
  };

}

module.exports = Address;
