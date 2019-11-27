const { randomNumber, randomFloat } = require("../utils/random");

function nonZeroDigit() {
  return randomNumber(1, 9);
}

function decimalPart(digits) {
  let num = "";
  if (digits > 1) {
    num = `${nonZeroDigit()}`;
    digits -= 1;
  }
  return leadingZeroNumber(digits) + num;
}

function leadingZeroNumber(digits) {
  return [...Array(digits).keys()]
    .map(() => randomNumber(0, 9))
    .join("");
}

class Number {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  /**
   * @param {number} digits
   * @returns {string}
   */
  number(digits=10) {
    let num = "";
    if (digits > 1) {
      num = `${nonZeroDigit()}`;
      digits -= 1;
    }
    return num + leadingZeroNumber(digits);
  }

  /**
   * @param {number} leftDigits
   * @param {number} rightDigits
   * @returns {string}
   */
  decimal(leftDigits=5, rightDigits=2) {
    return `${this.number(leftDigits)}.${decimalPart(rightDigits)}`;
  }

  /**
   * @param {number} mean
   * @param {number} standardDeviation
   * @returns {number}
   */
  normal(mean=1, standardDeviation=1) {
    let theta = 2 * Math.PI * Math.random();
    let rho = Math.sqrt(-2 * Math.log(1 - Math.random()));
    let scale = standardDeviation * rho;
    return mean + scale * Math.cos(theta);
  }

  /**
   * @param {number} digits
   * @returns {string}
   */
  hexadecimal(digits=6) {
    return [...Array(digits).keys()]
      .map(() => randomNumber(0, 15).toString(16))
      .join("");
  }

  /**
   * @param {number} from
   * @param {number} to
   * @returns {number}
   */
  between(from=1, to=5000) {
    let min = Math.min(from, to);
    let max = Math.max(from, to);
    return randomNumber(min, max);
  }

  /**
   * @param {number} from
   * @param {number} to
   * @returns {number}
   */
  betweenF(from=1.00, to=5000.00) {
    let min = Math.min(from, to);
    let max = Math.max(from, to);
    return randomFloat(min, max);
  }

  /**
   * @param {number} from
   * @param {number} to
   * @returns {number}
   */
  positive(from=1.00, to=5000.00) {
    let value = this.between(from, to);
    return value < 0 ? (value *= -1) : value;
  }

  /**
   * @param {number} from
   * @param {number} to
   * @returns {number}
   */
  negative(from=-1.00, to=-5000.00) {
    let value = this.between(from, to);
    return value < 0 ? value : (value *= -1);
  }

  /**
   * @returns {number}
   */
  digit() {
    return randomNumber(0, 9);
  }

}

module.exports = Number;
