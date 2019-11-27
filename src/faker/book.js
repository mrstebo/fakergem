const data = require("../../data/book.json");

class Book {

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
  title() {
    return this.faker.Random.element(data["titles"]);
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

  /**
   * @returns {string}
   */
  publisher() {
    return this.faker.Random.element(data["publishers"]);
  }

  /**
   * @returns {string}
   */
  genre() {
    return this.faker.Random.element(data["genres"]);
  }

}

module.exports = Book;
