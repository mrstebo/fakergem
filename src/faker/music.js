const data = require("../../data/music.json");

class Music {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  key() {
    return [
      this.faker.Random.element(data["keys"]),
      this.faker.Random.element(data["keyVariants"]),
    ].join("");
  }

  chord() {
    return [
      this.faker.Random.element(data["keys"]),
      this.faker.Random.element(data["chordTypes"]),
    ].join("");
  }

  instrument() {
    return this.faker.Random.element(data["instruments"]);
  }

}

module.exports = Music;
