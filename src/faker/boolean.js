module.exports = class Boolean {

  /**
   *
   * @param {import("../faker")} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  boolean(trueRatio=0.5) {
    return Math.random() < trueRatio;
  }

};
