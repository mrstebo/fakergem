const data = require("../../data/cat.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Cat(faker) {

  /**
   * @returns {string}
   */
  this.name = function() {
    return faker.Random.element(data["names"]);
  };

  /**
   * @returns {string}
   */
  this.breed = function() {
    return faker.Random.element(data["breeds"]);
  };

  /**
   * @returns {string}
   */
  this.registry = function() {
    return faker.Random.element(data["registries"]);
  };

}

module.exports = Cat;
