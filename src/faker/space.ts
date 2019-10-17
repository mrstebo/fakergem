import { Faker } from '../faker';
import data from '../data/space.json';

export class Space {
  private faker: Faker;

  constructor(faker: Faker) {
    this.faker = faker;
  }

  planet(): string {
    return this.faker.Random.element(data.planets);
  }

  moon(): string {
    return this.faker.Random.element(data.moons);
  }

  galaxy(): string {
    return this.faker.Random.element(data.galaxies);
  }

  nebula(): string {
    return this.faker.Random.element(data.nebulas);
  }

  starCluster(): string {
    return this.faker.Random.element(data.starClusters);
  }

  constellation(): string {
    return this.faker.Random.element(data.constellations);
  }

  star(): string {
    return this.faker.Random.element(data.stars);
  }

  agency(): string {
    return this.faker.Random.element(data.agencies);
  }

  agencyAbv(): string {
    return this.faker.Random.element(data.agencyAbvs);
  }

  nasaSpaceCraft(): string {
    return this.faker.Random.element(data.nasaSpaceCrafts);
  }

  company(): string {
    return this.faker.Random.element(data.companies);
  }

  distanceMeasurement(): string {
    return this.faker.Random.element(data.distanceMeasurements);
  }

  meteorite(): string {
    return this.faker.Random.element(data.meteorites);
  }
}
