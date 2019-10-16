import { Faker } from '../faker';
import data from '../../data/team.json';

export class Team {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  creature() {
    return this.faker.Random.element(data.creatures);
  }

  name() {
    return this.faker.Random.element(data.names);
  }

  state() {
    return this.faker.Address.state();
  }

  sport() {
    return this.faker.Random.element(data.sports);
  }
}
