const data = require('../../data/app.json');
const nameData = require('../../data/name.json');

export default class App {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data['names']);
  }

  version() {
    return this.faker.Random.element(data['versions'])
      .split('.')
      .map(x => x.replace(/#/g, () => this.faker.Number.between(0, 9)))
      .join('.');
  }

  author() {
    return [
      this.faker.Random.element(nameData['firstNames']),
      this.faker.Random.element(nameData['lastNames'])
    ].join(' ');
  }
}
