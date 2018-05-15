const data = require('../../data/rock-band.json');

export default class RockBand {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data['names']);
  }
}
