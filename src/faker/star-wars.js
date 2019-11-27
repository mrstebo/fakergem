const data = require("../../data/star-wars.json");

function capitalize(text) {
  return text.replace(/\b\w/, x => x.toUpperCase());
}

class StarWars {

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
  droid() {
    return this.faker.Random.element(data["droids"]);
  }

  /**
   * @returns {string}
   */
  planet() {
    return this.faker.Random.element(data["planets"]);
  }

  /**
   * @returns {string}
   */
  quote() {
    return this.faker.Random.element(data["quotes"]);
  }

  /**
   * @returns {string}
   */
  specie() {
    return this.faker.Random.element(data["species"]);
  }

  /**
   * @returns {string}
   */
  vehicle() {
    return this.faker.Random.element(data["vehicles"]);
  }

  /**
   * @returns {string}
   */
  wookieSentence() {
    return capitalize(
      [...Array(this.faker.Number.between(1, 10)).keys()]
        .map(() =>  this.faker.Random.element(data["wookieWords"]))
        .join(" ") + this.faker.Random.element([".", "?", "!"])
    );
  }

}

module.exports = StarWars;
