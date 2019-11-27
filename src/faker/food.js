const data = require("../../data/food.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Food(faker) {

  /**
   * @returns {string}
   */
  this.ingredient = function() {
    return faker.Random.element(data["ingredients"]);
  };

  /**
   * @returns {string}
   */
  this.spice = function() {
    return faker.Random.element(data["spices"]);
  };

  /**
   * @returns {string}
   */
  this.measurement = function() {
    return faker.Random.element(data["measurements"]);
  };

}

module.exports = Food;
