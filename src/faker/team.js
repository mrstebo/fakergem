const data = require("../../data/team.json");

module.exports = class Team {

  /**
   *
   * @param {import("../faker")} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  creature() {
    return this.faker.Random.element(data["creatures"]);
  }

  name() {
    return this.faker.Random.element(data["names"]);
  }

  state() {
    return this.faker.Address.state();
  }

  sport() {
    return this.faker.Random.element(data["sports"]);
  }

};
