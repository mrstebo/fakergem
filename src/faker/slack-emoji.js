const data = require("../../data/slack-emoji.json");

class SlackEmoji {

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
  people() {
    return this.faker.Random.element(data["people"]);
  }

  /**
   * @returns {string}
   */
  nature() {
    return this.faker.Random.element(data["nature"]);
  }

  /**
   * @returns {string}
   */
  foodAndDrink() {
    return this.faker.Random.element(data["foodAndDrink"]);
  }

  /**
   * @returns {string}
   */
  celebration() {
    return this.faker.Random.element(data["celebration"]);
  }

  /**
   * @returns {string}
   */
  activity() {
    return this.faker.Random.element(data["activity"]);
  }

  /**
   * @returns {string}
   */
  travelAndPlaces() {
    return this.faker.Random.element(data["travelAndPlaces"]);
  }

  /**
   * @returns {string}
   */
  objectsAndSymbols() {
    return this.faker.Random.element(data["objectsAndSymbols"]);
  }

  /**
   * @returns {string}
   */
  custom() {
    return this.faker.Random.element(data["custom"]);
  }

  /**
   * @returns {string}
   */
  emoji() {
    return this.faker.Random.element([
      ...data["people"],
      ...data["nature"],
      ...data["foodAndDrink"],
      ...data["celebration"],
      ...data["activity"],
      ...data["travelAndPlaces"],
      ...data["objectsAndSymbols"],
      ...data["custom"],
    ]);
  }

}

module.exports = SlackEmoji;
