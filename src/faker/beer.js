const data = require("../../data/beer.json");

class Beer {

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
  name() {
    return this.faker.Random.element(data["names"]);
  }

  /**
   * @returns {string}
   */
  style() {
    return this.faker.Random.element(data["styles"]);
  }

  /**
   * @returns {string}
   */
  hop() {
    return this.faker.Random.element(data["hops"]);
  }

  /**
   * @returns {string}
   */
  yeast() {
    return this.faker.Random.element(data["yeasts"]);
  }

  /**
   * @returns {string}
   */
  malt() {
    return this.faker.Random.element(data["malts"]);
  }

  /**
   * @returns {string}
   */
  ibu() {
    return `${this.faker.Number.between(10, 99)} IBU`;
  }

  /**
   * @returns {string}
   */
  alcohol() {
    return `${this.faker.Number.betweenF(2.0, 10.0).toFixed(1)}%`;
  }

  /**
   * @returns {string}
   */
  blg() {
    return `${this.faker.Number.betweenF(2.0, 10.0).toFixed(1)}°Blg`;
  }

}

module.exports = Beer;
