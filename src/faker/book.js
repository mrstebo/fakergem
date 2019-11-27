const data = require("../../data/book.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Book(faker) {

  /**
   * @returns {string}
   */
  this.title = function() {
    return faker.Random.element(data["titles"]);
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

  /**
   * @returns {string}
   */
  this.publisher = function() {
    return faker.Random.element(data["publishers"]);
  };

  /**
   * @returns {string}
   */
  this.genre = function() {
    return faker.Random.element(data["genres"]);
  };

}

module.exports = Book;
