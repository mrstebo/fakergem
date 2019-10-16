import { Faker } from '../faker';
import data from '../../data/app.json';

export class App {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name(): string {
    return this.faker.Random.element(data.names);
  }

  version(): string {
    return this.faker.Random.element(data.versions)
      .split('.')
      .map(x => x.replace(/#/g, () => this.faker.Number.between(0, 9)))
      .join('.');
  }

  author(): string {
    return [this.faker.Name.firstName(), this.faker.Name.lastName()].join(' ');
  }
}
