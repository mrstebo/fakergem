const data = require("../../data/commerce.json");



function mergeCategories(categories) {
  const separator = " & ";
  const commaSeparated = categories.slice(0, -1).join(", ");
  const lastCategory = categories.slice(-1);
  return [commaSeparated, lastCategory].join(separator);
}

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Commerce(faker) {

  function buildCategories(num) {
    const categories = [];
    while (categories.length < num) {
      const category = faker.Random.element(data["departments"]);
      if (categories.indexOf(category) < 0) {
        categories.push(category);
      }
    }
    return categories;
  }

  /**
   * @returns {string}
   */
  this.color = function() {
    return faker.Color.colorName();
  };

  /**
   * @param {number} max
   * @param {boolean} fixedAmount
   * @returns {string}
   */
  this.department = function(max=3, fixedAmount=false) {
    const num = fixedAmount ? max : faker.Number.between(1, max);
    const categories = buildCategories(num);
    return num > 1 ? mergeCategories(categories) : categories[0];
  };

  /**
   * @returns {string}
   */
  this.productName = function() {
    return [
      faker.Random.element(data["productNames"]["adjective"]),
      faker.Random.element(data["productNames"]["material"]),
      faker.Random.element(data["productNames"]["product"]),
    ].join(" ");
  };

  /**
   * @param {{ min: number, max: number }} range
   * @returns {string}
   */
  this.price = function(range={ min: 0.00, max: 100.00 }) {
    const n = faker.Number.between(range.min, range.max);
    return (Math.floor(n * 100) / 100.0).toFixed(2);
  };

  /**
   * @returns {string}
   */
  this.promotionCode = function(digits=6) {
    return [
      faker.Random.element(data["promotionCodes"]["adjective"]),
      faker.Random.element(data["promotionCodes"]["noun"]),
      faker.Number.number(digits),
    ].join("");
  };

}

module.exports = Commerce;
