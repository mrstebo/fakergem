import { Faker } from '../faker';
import data from '../../data/file.json';

export class File {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  extension() {
    return this.faker.Random.element(data['extensions']);
  }

  mimeType() {
    return this.faker.Random.element(data['mimeTypes']);
  }

  fileName(dir = null, name = null, ext = null, directorySeparator = '/') {
    dir = dir || this.faker.Lorem.words(2).join('-');
    name = name || this.faker.Lorem.word();
    ext = ext || this.extension();

    return `${[dir, name].join(directorySeparator)}.${ext}`;
  }
}
