const data = require("../../data/color.json");

function leftPad(text, length, paddingCharacter) {
  let padding = [...Array(length)].map(() => paddingCharacter).join("");
  return (padding + text).slice(-length);
}

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Color(faker) {

  /**
   * @returns {string}
   */
  this.hexColor = function() {
    const n = faker.Number.between(0, 0xffffff);
    return `#${leftPad(n.toString(16), 6, "0")}`;
  };

  /**
   * @returns {string}
   */
  this.colorName = function() {
    return faker.Random.element(data["colorNames"]);
  };

  /**
   * @returns {number[]}
   */
  this.rgbColor = function() {
    return [...Array(3).keys()]
      .map(() => faker.Number.between(0, 255));
  };

  /**
   * @returns {number[]}
   */
  this.hslColor = function() {
    return [
      faker.Number.between(0, 360),
      Math.round(faker.Number.betweenF(0.00, 1.00), 2),
      Math.round(faker.Number.betweenF(0.00, 1.00), 2),
    ];
  };

  /**
   * @returns {number[]}
   */
  this.hslaColor = function() {
    return [
      faker.Number.between(0, 360),
      Math.round(faker.Number.betweenF(0.00, 1.00), 2),
      Math.round(faker.Number.betweenF(0.00, 1.00), 2),
      faker.Number.betweenF(0.00, 1.00),
    ];
  };

}

module.exports = Color;
