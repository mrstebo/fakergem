const data = require("../../data/friends.json");

module.exports =  class Friends {
  constructor(faker) {
    this.faker = faker;
  }

  character() {
    return this.faker.Random.element(data["characters"]);
  }

  location() {
    return this.faker.Random.element(data["locations"]);
  }

  quote() {
    return this.faker.Random.element(data["quotes"]);
  }
};
