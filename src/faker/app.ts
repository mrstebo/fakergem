import { Faker } from '../faker';
import data from '../../data/app.json';

export class App {
  private faker: Faker;

  constructor(faker: Faker) {
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
    return [this.faker.Name.firstName(), this.faker.Name.lastName()].join(' ');
  }
}
