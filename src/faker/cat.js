const data = require("../../data/cat.json");

module.exports =  class Cat {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data["names"]);
  }

  breed() {
    return this.faker.Random.element(data["breeds"]);
  }

  registry() {
    return this.faker.Random.element(data["registries"]);
  }
};
