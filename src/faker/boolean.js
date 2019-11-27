class Boolean {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  boolean(trueRatio=0.5) {
    return Math.random() < trueRatio;
  }

}

module.exports = Boolean;
