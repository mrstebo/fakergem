const data = require("../../data/game-of-thrones.json");

module.exports =  class GameOfThrones {
  constructor(faker) {
    this.faker = faker;
  }

  character() {
    return this.faker.Random.element(data["characters"]);
  }

  house() {
    return this.faker.Random.element(data["houses"]);
  }

  city() {
    return this.faker.Random.element(data["cities"]);
  }

  dragon() {
    return this.faker.Random.element(data["dragons"]);
  }
};
