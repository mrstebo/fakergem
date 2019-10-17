import { Faker } from '../faker';
import data from '../data/file.json';

export class File {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  extension(): string {
    return this.faker.Random.element(data.extensions);
  }

  mimeType(): string {
    return this.faker.Random.element(data.mimeTypes);
  }

  fileName(
    dir: string | null = null,
    name: string | null = null,
    ext: string | null = null,
    directorySeparator: string = '/'
  ): string {
    dir = dir || this.faker.Lorem.words(2).join('-');
    name = name || this.faker.Lorem.word();
    ext = ext || this.extension();

    return `${[dir, name].join(directorySeparator)}.${ext}`;
  }
}
