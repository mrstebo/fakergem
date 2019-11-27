const data = require("../../data/food.json");

class Food {

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
  ingredient() {
    return this.faker.Random.element(data["ingredients"]);
  }

  /**
   * @returns {string}
   */
  spice() {
    return this.faker.Random.element(data["spices"]);
  }

  /**
   * @returns {string}
   */
  measurement() {
    return this.faker.Random.element(data["measurements"]);
  }

}

module.exports = Food;
