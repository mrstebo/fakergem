import data from '../data/educator.json';
import { Faker } from '../faker';

export class Educator {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public university(): string {
    const name = this.faker.Random.element(data.names);
    const tertiaryType = this.faker.Random.element(data.tertiaries.types);
    return `${name} ${tertiaryType}`;
  }

  public secondarySchool(): string {
    const name = this.faker.Random.element(data.names);
    const secondary = this.faker.Random.element(data.secondaries);
    return `${name} ${secondary}`;
  }

  public course(): string {
    const courseType = this.faker.Random.element(data.tertiaries.course.types);
    const courseSubject = this.faker.Random.element(data.tertiaries.course.subjects);
    return `${courseType} ${courseSubject}`;
  }

  public campus(): string {
    const name = this.faker.Random.element(data.names);
    return `${name} Campus`;
  }
}
