const data = require('../../data/educator.json');

export default class Educator {
  constructor(faker) {
    this.faker = faker;
  }

  university() {
    const name = this.faker.Random.element(data['names']);
    const tertiaryType = this.faker.Random.element(data['tertiaries']['types']);
    return `${name} ${tertiaryType}`;
  }

  secondarySchool() {
    const name = this.faker.Random.element(data['names']);
    const secondary = this.faker.Random.element(data['secondaries']);
    return `${name} ${secondary}`;
  }

  course() {
    const courseType = this.faker.Random.element(data['tertiaries']['course']['types']);
    const courseSubject = this.faker.Random.element(data['tertiaries']['course']['subjects']);
    return `${courseType} ${courseSubject}`;
  }

  campus() {
    const name = this.faker.Random.element(data['names']);
    return `${name} Campus`;
  }
}
