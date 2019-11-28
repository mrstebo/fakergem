import data from '../data/space.json';
import { Faker } from '../faker';

export class Space {
  private readonly faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  public planet(): string {
    return this.faker.Random.element(data.planets);
  }

  public moon(): string {
    return this.faker.Random.element(data.moons);
  }

  public galaxy(): string {
    return this.faker.Random.element(data.galaxies);
  }

  public nebula(): string {
    return this.faker.Random.element(data.nebulas);
  }

  public starCluster(): string {
    return this.faker.Random.element(data.starClusters);
  }

  public constellation(): string {
    return this.faker.Random.element(data.constellations);
  }

  public star(): string {
    return this.faker.Random.element(data.stars);
  }

  public agency(): string {
    return this.faker.Random.element(data.agencies);
  }

  public agencyAbv(): string {
    return this.faker.Random.element(data.agencyAbvs);
  }

  public nasaSpaceCraft(): string {
    return this.faker.Random.element(data.nasaSpaceCrafts);
  }

  public company(): string {
    return this.faker.Random.element(data.companies);
  }

  public distanceMeasurement(): string {
    return this.faker.Random.element(data.distanceMeasurements);
  }

  public meteorite(): string {
    return this.faker.Random.element(data.meteorites);
  }
}
