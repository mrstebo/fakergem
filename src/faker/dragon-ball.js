const data = require('../../data/dragon-ball.json');

export default class DragonBall {
  constructor(faker) {
    this.faker = faker;
  }

  character() {
    return this.faker.Random.element(data['characters']);
  }
}
