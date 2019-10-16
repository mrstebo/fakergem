import { Faker } from '../faker';
import data from '../../data/music.json';

export class Music {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  key() {
    return [this.faker.Random.element(data['keys']), this.faker.Random.element(data['keyVariants'])].join('');
  }

  chord() {
    return [this.faker.Random.element(data['keys']), this.faker.Random.element(data['chordTypes'])].join('');
  }

  instrument() {
    return this.faker.Random.element(data['instruments']);
  }
}
