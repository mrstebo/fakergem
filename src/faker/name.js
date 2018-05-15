const data = require('../../data/name.json');

export default class Name {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return [
      this.faker.Random.element(data['firstNames']),
      this.faker.Random.element(data['lastNames'])
    ].join(' ');
  }

  nameWithMiddle() {
    return [
      this.faker.Random.element(data['firstNames']),
      this.faker.Random.element(data['firstNames']),
      this.faker.Random.element(data['lastNames'])
    ].join(' ');
  }

  firstName() {
    return this.faker.Random.element(data['firstNames']);
  }

  lastName() {
    return this.faker.Random.element(data['lastNames']);
  }

  prefix() {
    return this.faker.Random.element(data['prefixes']);
  }

  suffix() {
    return this.faker.Random.element(data['suffixes']);
  }

  title() {
    return [
      this.faker.Random.element(data['titles']['descriptor']),
      this.faker.Random.element(data['titles']['level']),
      this.faker.Random.element(data['titles']['job'])
    ].join(' ');
  }
}
