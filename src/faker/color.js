const data = require("../../data/color.json");

function leftPad(text, length, paddingCharacter) {
  let padding = [...Array(length)].map(() => paddingCharacter).join("");
  return (padding + text).slice(-length);
}

module.exports = class Color {
  constructor(faker) {
    this.faker = faker;
  }

  hexColor() {
    const n = this.faker.Number.between(0, 0xffffff);
    return `#${leftPad(n.toString(16), 6, "0")}`;
  }

  colorName() {
    return this.faker.Random.element(data["colorNames"]);
  }

  rgbColor() {
    return [...Array(3).keys()]
      .map(() => this.faker.Number.between(0, 255));
  }

  hslColor() {
    return [
      this.faker.Number.between(0, 360),
      Math.round(this.faker.Number.betweenF(0.00, 1.00), 2),
      Math.round(this.faker.Number.betweenF(0.00, 1.00), 2),
    ];
  }

  hslaColor() {
    return [
      this.faker.Number.between(0, 360),
      Math.round(this.faker.Number.betweenF(0.00, 1.00), 2),
      Math.round(this.faker.Number.betweenF(0.00, 1.00), 2),
      this.faker.Number.betweenF(0.00, 1.00),
    ];
  }
};
