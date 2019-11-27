const data = require("../../data/app.json");

class App {

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
  version() {
    return this.faker.Random.element(data["versions"])
      .split(".")
      .map(x => x.replace(/#/g, () => this.faker.Number.between(0, 9)))
      .join(".");
  }

  /**
   * @returns {string}
   */
  author() {
    return [
      this.faker.Name.firstName(),
      this.faker.Name.lastName(),
    ].join(" ");
  }

}

module.exports = App;
