import { Faker } from '../faker';
import data from '../../data/rock-band.json';

export class RockBand {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data.names);
  }
}
