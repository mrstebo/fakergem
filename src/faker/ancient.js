const data = require("../../data/ancient.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Ancient(faker) {

  /**
   * @returns {string}
   */
  this.god = function() {
    return faker.Random.element(data["gods"]);
  };

  /**
   * @returns {string}
   */
  this.primordial = function() {
    return faker.Random.element(data["primordials"]);
  };

  /**
   * @returns {string}
   */
  this.titan = function() {
    return faker.Random.element(data["titans"]);
  };

  /**
   * @returns {string}
   */
  this.hero = function() {
    return faker.Random.element(data["heroes"]);
  };

}

module.exports = Ancient;
