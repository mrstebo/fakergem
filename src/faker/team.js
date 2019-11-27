const data = require("../../data/team.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Team(faker) {

  /**
   * @returns {string}
   */
  this.creature = function() {
    return faker.Random.element(data["creatures"]);
  };

  /**
   * @returns {string}
   */
  this.name = function() {
    return faker.Random.element(data["names"]);
  };

  /**
   * @returns {string}
   */
  this.state = function() {
    return faker.Address.state();
  };

  /**
   * @returns {string}
   */
  this.sport = function() {
    return faker.Random.element(data["sports"]);
  };

}

module.exports = Team;
