const data = require("../../data/food.json");

module.exports =  class Food {
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
};
