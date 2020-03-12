import data from '../data/team.json';
import { Faker } from '../faker';

export class Team {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public creature(): string {
    return this.faker.Random.element(data.creatures);
  }

  public name(): string {
    return this.faker.Random.element(data.names);
  }

  public state(): string {
    return this.faker.Address.state();
  }

  public sport(): string {
    return this.faker.Random.element(data.sports);
  }
}
