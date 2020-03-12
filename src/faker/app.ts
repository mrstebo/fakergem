import data from '../data/app.json';
import { Faker } from '../faker';

export class App {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public name(): string {
    return this.faker.Random.element(data.names);
  }

  public version(): string {
    return (this.faker.Random.element(data.versions) as string)
      .split('.')
      .map(x => x.replace(/#/g, () => this.faker.Number.between(0, 9).toString()))
      .join('.');
  }

  public author(): string {
    return [this.faker.Name.firstName(), this.faker.Name.lastName()].join(' ');
  }
}
