const data = require("../../data/music.json");

class Music {

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
  key() {
    return [
      this.faker.Random.element(data["keys"]),
      this.faker.Random.element(data["keyVariants"]),
    ].join("");
  }

  /**
   * @returns {string}
   */
  chord() {
    return [
      this.faker.Random.element(data["keys"]),
      this.faker.Random.element(data["chordTypes"]),
    ].join("");
  }

  /**
   * @returns {string}
   */
  instrument() {
    return this.faker.Random.element(data["instruments"]);
  }

}

module.exports = Music;
