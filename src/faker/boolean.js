export default class Boolean {
  constructor(faker) {
    this.faker = faker;
  }

  boolean(trueRatio=0.5) {
    return Math.random() < trueRatio;
  }
}
