import data from '../../data/slack-emoji.json';
import { itemFromCollection } from '../utils/random';

export function people() {
  return itemFromCollection(data['people']);
}

export function nature() {
  return itemFromCollection(data['nature']);
}

export function foodAndDrink() {
  return itemFromCollection(data['foodAndDrink']);
}

export function celebration() {
  return itemFromCollection(data['celebration']);
}

export function activity() {
  return itemFromCollection(data['activity']);
}

export function travelAndPlaces() {
  return itemFromCollection(data['travelAndPlaces']);
}

export function objectsAndSymbols() {
  return itemFromCollection(data['objectsAndSymbols']);
}

export function custom() {
  return itemFromCollection(data['custom']);
}

export function emoji() {
  return itemFromCollection([
    ...data['people'],
    ...data['nature'],
    ...data['foodAndDrink'],
    ...data['celebration'],
    ...data['activity'],
    ...data['travelAndPlaces'],
    ...data['objectsAndSymbols'],
    ...data['custom']
  ]);
}
