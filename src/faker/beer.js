const data = require("../../data/beer.json");

class Beer {

  /**
   *
   * @param {Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data["names"]);
  }

  style() {
    return this.faker.Random.element(data["styles"]);
  }

  hop() {
    return this.faker.Random.element(data["hops"]);
  }

  yeast() {
    return this.faker.Random.element(data["yeasts"]);
  }

  malt() {
    return this.faker.Random.element(data["malts"]);
  }

  ibu() {
    return `${this.faker.Number.between(10, 99)} IBU`;
  }

  alcohol() {
    return `${this.faker.Number.betweenF(2.0, 10.0).toFixed(1)}%`;
  }

  blg() {
    return `${this.faker.Number.betweenF(2.0, 10.0).toFixed(1)}°Blg`;
  }

}

module.exports = Beer;
