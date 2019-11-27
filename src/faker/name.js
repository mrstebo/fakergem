const data = require("../../data/name.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Name(faker) {

  /**
   * @returns {string}
   */
  this.name = function() {
    return [
      this.firstName(),
      this.lastName(),
    ].join(" ");
  };

  /**
   * @returns {string}
   */
  this.nameWithMiddle = function() {
    return [
      this.firstName(),
      this.firstName(),
      this.lastName(),
    ].join(" ");
  };

  /**
   * @returns {string}
   */
  this.firstName = function() {
    return faker.Random.element(data["firstNames"]);
  };

  /**
   * @returns {string}
   */
  this.lastName = function() {
    return faker.Random.element(data["lastNames"]);
  };

  /**
   * @returns {string}
   */
  this.prefix = function() {
    return faker.Random.element(data["prefixes"]);
  };

  /**
   * @returns {string}
   */
  this.suffix = function() {
    return faker.Random.element(data["suffixes"]);
  };

  /**
   * @returns {string}
   */
  this.title = function() {
    return [
      faker.Random.element(data["titles"]["descriptor"]),
      faker.Random.element(data["titles"]["level"]),
      faker.Random.element(data["titles"]["job"]),
    ].join(" ");
  };

}

module.exports = Name;
