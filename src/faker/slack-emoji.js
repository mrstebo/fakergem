const data = require("../../data/slack-emoji.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function SlackEmoji(faker) {

  /**
   * @returns {string}
   */
  this.people = function() {
    return faker.Random.element(data["people"]);
  };

  /**
   * @returns {string}
   */
  this.nature = function() {
    return faker.Random.element(data["nature"]);
  };

  /**
   * @returns {string}
   */
  this.foodAndDrink = function() {
    return faker.Random.element(data["foodAndDrink"]);
  };

  /**
   * @returns {string}
   */
  this.celebration = function() {
    return faker.Random.element(data["celebration"]);
  };

  /**
   * @returns {string}
   */
  this.activity = function() {
    return faker.Random.element(data["activity"]);
  };

  /**
   * @returns {string}
   */
  this.travelAndPlaces = function() {
    return faker.Random.element(data["travelAndPlaces"]);
  };

  /**
   * @returns {string}
   */
  this.objectsAndSymbols = function() {
    return faker.Random.element(data["objectsAndSymbols"]);
  };

  /**
   * @returns {string}
   */
  this.custom = function() {
    return faker.Random.element(data["custom"]);
  };

  /**
   * @returns {string}
   */
  this.emoji = function() {
    return faker.Random.element([
      ...data["people"],
      ...data["nature"],
      ...data["foodAndDrink"],
      ...data["celebration"],
      ...data["activity"],
      ...data["travelAndPlaces"],
      ...data["objectsAndSymbols"],
      ...data["custom"],
    ]);
  };

}

module.exports = SlackEmoji;
