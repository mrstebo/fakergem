import { itemFromCollection } from '../utils/random';

const data = require('../../data/space.json');

export default class Space {
  constructor(faker) {
    this.faker = faker;
  }

  planet() {
    return itemFromCollection(data['planets']);
  }

  moon() {
    return itemFromCollection(data['moons']);
  }

  galaxy() {
    return itemFromCollection(data['galaxies']);
  }

  nebula() {
    return itemFromCollection(data['nebulas']);
  }

  starCluster() {
    return itemFromCollection(data['starClusters']);
  }

  constellation() {
    return itemFromCollection(data['constellations']);
  }

  star() {
    return itemFromCollection(data['stars']);
  }

  agency() {
    return itemFromCollection(data['agencies']);
  }

  agencyAbv() {
    return itemFromCollection(data['agencyAbvs']);
  }

  nasaSpaceCraft() {
    return itemFromCollection(data['nasaSpaceCrafts']);
  }

  company() {
    return itemFromCollection(data['companies']);
  }

  distanceMeasurement() {
    return itemFromCollection(data['distanceMeasurements']);
  }

  meteorite() {
    return itemFromCollection(data['meteorites']);
  }
}
