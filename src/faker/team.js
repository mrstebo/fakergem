import { itemFromCollection } from '../utils/random';

const data = require('../../data/team.json');
const addressData = require('../../data/address.json');

export function creature() {
  return itemFromCollection(data['creatures']);
}

export function name() {
  return itemFromCollection(data['names']);
}

export function state() {
  return itemFromCollection(addressData['states']);
}

export function sport() {
  return itemFromCollection(data['sports']);
}
