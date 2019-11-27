const data = require("../../data/food.json");

class Food {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  ingredient() {
    return this.faker.Random.element(data["ingredients"]);
  }

  spice() {
    return this.faker.Random.element(data["spices"]);
  }

  measurement() {
    return this.faker.Random.element(data["measurements"]);
  }

}

module.exports = Food;
