const data = require("../../data/team.json");

class Team {

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
  creature() {
    return this.faker.Random.element(data["creatures"]);
  }

  /**
   * @returns {string}
   */
  name() {
    return this.faker.Random.element(data["names"]);
  }

  /**
   * @returns {string}
   */
  state() {
    return this.faker.Address.state();
  }

  /**
   * @returns {string}
   */
  sport() {
    return this.faker.Random.element(data["sports"]);
  }

}

module.exports = Team;
