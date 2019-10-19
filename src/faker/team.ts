import { Faker } from '../faker';
import data from '../data/team.json';

export class Team {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  creature(): string {
    return this.faker.Random.element(data.creatures);
  }

  name(): string {
    return this.faker.Random.element(data.names);
  }

  state(): string {
    return this.faker.Address.state();
  }

  sport(): string {
    return this.faker.Random.element(data.sports);
  }
}
