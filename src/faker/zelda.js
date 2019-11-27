const data = require("../../data/zelda.json");

class Zelda {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  game() {
    return this.faker.Random.element(data["games"]);
  }

  character() {
    return this.faker.Random.element(data["characters"]);
  }

  location() {
    return this.faker.Random.element(data["locations"]);
  }

}

module.exports = Zelda;
