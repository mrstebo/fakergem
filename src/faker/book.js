const data = require("../../data/book.json");

class Book {

  /**
   *
   * @param {Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  title() {
    return this.faker.Random.element(data["titles"]);
  }

  author() {
    return [
      this.faker.Name.firstName(),
      this.faker.Name.lastName(),
    ].join(" ");
  }

  publisher() {
    return this.faker.Random.element(data["publishers"]);
  }

  genre() {
    return this.faker.Random.element(data["genres"]);
  }

}

module.exports = Book;