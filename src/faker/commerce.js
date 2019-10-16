const data = require("../../data/commerce.json");

function buildCategories(faker, num) {
  const categories = [];
  while (categories.length < num) {
    const category = faker.Random.element(data["departments"]);
    if (categories.indexOf(category) < 0) {
      categories.push(category);
    }
  }
  return categories;
}

function mergeCategories(categories) {
  const separator = " & ";
  const commaSeparated = categories.slice(0, -1).join(", ");
  const lastCategory = categories.slice(-1);
  return [commaSeparated, lastCategory].join(separator);
}

module.exports = class Commerce {
  constructor(faker) {
    this.faker = faker;
  }

  color() {
    return this.faker.Color.colorName();
  }

  department(max=3, fixedAmount=false) {
    const num = fixedAmount ? max : this.faker.Number.between(1, max);
    const categories = buildCategories(this.faker, num);
    return num > 1 ? mergeCategories(categories) : categories[0];
  }

  productName() {
    return [
      this.faker.Random.element(data["productNames"]["adjective"]),
      this.faker.Random.element(data["productNames"]["material"]),
      this.faker.Random.element(data["productNames"]["product"]),
    ].join(" ");
  }

  price(range={ min: 0.00, max: 100.00 }) {
    const n = this.faker.Number.between(range.min, range.max);
    return (Math.floor(n * 100) / 100.0).toFixed(2);
  }

  promotionCode(digits=6) {
    return [
      this.faker.Random.element(data["promotionCodes"]["adjective"]),
      this.faker.Random.element(data["promotionCodes"]["noun"]),
      this.faker.Number.number(digits),
    ].join("");
  }
};
