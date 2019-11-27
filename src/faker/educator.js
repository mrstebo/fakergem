const data = require("../../data/educator.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Educator(faker) {

  /**
   * @returns {string}
   */
  this.university = function() {
    const name = faker.Random.element(data["names"]);
    const tertiaryType = faker.Random.element(data["tertiaries"]["types"]);
    return `${name} ${tertiaryType}`;
  };

  /**
   * @returns {string}
   */
  this.secondarySchool = function() {
    const name = faker.Random.element(data["names"]);
    const secondary = faker.Random.element(data["secondaries"]);
    return `${name} ${secondary}`;
  };

  /**
   * @returns {string}
   */
  this.course = function() {
    const courseType = faker.Random.element(data["tertiaries"]["course"]["types"]);
    const courseSubject = faker.Random.element(data["tertiaries"]["course"]["subjects"]);
    return `${courseType} ${courseSubject}`;
  };

  /**
   * @returns {string}
   */
  this.campus = function() {
    const name = faker.Random.element(data["names"]);
    return `${name} Campus`;
  };

}

module.exports = Educator;
