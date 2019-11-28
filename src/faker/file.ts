import data from '../data/file.json';
import { Faker } from '../faker';

export class File {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public extension(): string {
    return this.faker.Random.element(data.extensions);
  }

  public mimeType(): string {
    return this.faker.Random.element(data.mimeTypes);
  }

  public fileName(
    dir: string | null = null,
    name: string | null = null,
    ext: string | null = null,
    directorySeparator: string = '/',
  ): string {
    dir = dir || this.faker.Lorem.words(2).join('-');
    name = name || this.faker.Lorem.word();
    ext = ext || this.extension();

    return `${[dir, name].join(directorySeparator)}.${ext}`;
  }
}
