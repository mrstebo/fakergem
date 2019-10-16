const data = require("../../data/dragon-ball.json");

module.exports = class DragonBall {
  constructor(faker) {
    this.faker = faker;
  }

  character() {
    return this.faker.Random.element(data["characters"]);
  }
};
