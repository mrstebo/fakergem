const data = require("../../data/friends.json");

class Friends {

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
  character() {
    return this.faker.Random.element(data["characters"]);
  }

  /**
   * @returns {string}
   */
  location() {
    return this.faker.Random.element(data["locations"]);
  }

  /**
   * @returns {string}
   */
  quote() {
    return this.faker.Random.element(data["quotes"]);
  }

}

module.exports = Friends;
