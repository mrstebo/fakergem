const data = require('../../data/matz.json');

export default class Matz {
  constructor(faker) {
    this.faker = faker;
  }

  quote() {
    return this.faker.Random.element(data['quotes']);
  }
}
