const data = require('../../data/rick-and-morty.json');

export default class RickAndMorty {
  constructor(faker) {
    this.faker = faker;
  }

  character() {
    return this.faker.Random.element(data['characters']);
  }

  location() {
    return this.faker.Random.element(data['locations']);
  }

  quote() {
    return this.faker.Random.element(data['quotes']);
  }
}
