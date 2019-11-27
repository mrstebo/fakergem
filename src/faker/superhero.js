const data = require("../../data/superhero.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Superhero(faker) {

  /**
   * @returns {string}
   */
  this.name = function() {
    return faker.Random.element(data["names"])
      .replace("{prefix}", faker.Random.element(data["prefixes"]))
      .replace("{suffix}", faker.Random.element(data["suffixes"]))
      .replace("{descriptor}", faker.Random.element(data["descriptors"]));
  };

  /**
   * @returns {string}
   */
  this.power = function() {
    return faker.Random.element(data["powers"]);
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
  this.descriptor = function() {
    return faker.Random.element(data["descriptors"]);
  };

}

module.exports = Superhero;
