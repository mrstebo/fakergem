const data = require("../../data/educator.json");

class Educator {

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
  university() {
    const name = this.faker.Random.element(data["names"]);
    const tertiaryType = this.faker.Random.element(data["tertiaries"]["types"]);
    return `${name} ${tertiaryType}`;
  }

  /**
   * @returns {string}
   */
  secondarySchool() {
    const name = this.faker.Random.element(data["names"]);
    const secondary = this.faker.Random.element(data["secondaries"]);
    return `${name} ${secondary}`;
  }

  /**
   * @returns {string}
   */
  course() {
    const courseType = this.faker.Random.element(data["tertiaries"]["course"]["types"]);
    const courseSubject = this.faker.Random.element(data["tertiaries"]["course"]["subjects"]);
    return `${courseType} ${courseSubject}`;
  }

  /**
   * @returns {string}
   */
  campus() {
    const name = this.faker.Random.element(data["names"]);
    return `${name} Campus`;
  }

}

module.exports = Educator;
