const data = require('../../data/ru-paul.json');

export default class RuPaul {
  constructor(faker) {
    this.faker = faker;
  }

  quote() {
    return this.faker.Random.element(data['quotes']);
  }
}
