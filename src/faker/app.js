const data = require("../../data/app.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function App(faker) {

  /**
   * @returns {string}
   */
  this.name = function() {
    return faker.Random.element(data["names"]);
  };

  /**
   * @returns {string}
   */
  this.version = function() {
    return faker.Random.element(data["versions"])
      .split(".")
      .map(x => x.replace(/#/g, () => faker.Number.between(0, 9)))
      .join(".");
  };

  /**
   * @returns {string}
   */
  this.author = function() {
    return [
      faker.Name.firstName(),
      faker.Name.lastName(),
    ].join(" ");
  };

}

module.exports = App;
