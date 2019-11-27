const data = require("../../data/beer.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Beer(faker) {

  /**
   * @returns {string}
   */
  this.name = function() {
    return faker.Random.element(data["names"]);
  };

  /**
   * @returns {string}
   */
  this.style = function() {
    return faker.Random.element(data["styles"]);
  };

  /**
   * @returns {string}
   */
  this.hop = function() {
    return faker.Random.element(data["hops"]);
  };

  /**
   * @returns {string}
   */
  this.yeast = function() {
    return faker.Random.element(data["yeasts"]);
  };

  /**
   * @returns {string}
   */
  this.malt = function() {
    return faker.Random.element(data["malts"]);
  };

  /**
   * @returns {string}
   */
  this.ibu = function() {
    return `${faker.Number.between(10, 99)} IBU`;
  };

  /**
   * @returns {string}
   */
  this.alcohol = function() {
    return `${faker.Number.betweenF(2.0, 10.0).toFixed(1)}%`;
  };

  /**
   * @returns {string}
   */
  this.blg = function() {
    return `${faker.Number.betweenF(2.0, 10.0).toFixed(1)}°Blg`;
  };

}

module.exports = Beer;
