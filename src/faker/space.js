import { itemFromCollection } from '../utils/random';

const data = require('../../data/space.json');

export function planet() {
  return itemFromCollection(data['planets']);
}

export function moon() {
  return itemFromCollection(data['moons']);
}

export function galaxy() {
  return itemFromCollection(data['galaxies']);
}

export function nebula() {
  return itemFromCollection(data['nebulas']);
}

export function starCluster() {
  return itemFromCollection(data['starClusters']);
}

export function constellation() {
  return itemFromCollection(data['constellations']);
}

export function star() {
  return itemFromCollection(data['stars']);
}

export function agency() {
  return itemFromCollection(data['agencies']);
}

export function agencyAbv() {
  return itemFromCollection(data['agencyAbvs']);
}

export function nasaSpaceCraft() {
  return itemFromCollection(data['nasaSpaceCrafts']);
}

export function company() {
  return itemFromCollection(data['companies']);
}

export function distanceMeasurement() {
  return itemFromCollection(data['distanceMeasurements']);
}

export function meteorite() {
  return itemFromCollection(data['meteorites']);
}

