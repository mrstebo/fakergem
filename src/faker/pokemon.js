const data = require('../../data/pokemon.json');

export default class Pokemon {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data['names']);
  }

  location() {
    return this.faker.Random.element(data['locations']);
  }
}
