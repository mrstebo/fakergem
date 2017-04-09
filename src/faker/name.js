import data from '../../data/name.json';
import { itemFromCollection } from '../utils/random';

export function name() {
  return [
    itemFromCollection(data['firstNames']),
    itemFromCollection(data['lastNames'])
  ].join(' ');
}

export function nameWithMiddle() {
  return [
    itemFromCollection(data['firstNames']),
    itemFromCollection(data['firstNames']),
    itemFromCollection(data['lastNames'])
  ].join(' ');
}

export function firstName() {
  return itemFromCollection(data['firstNames']);
}

export function lastName() {
  return itemFromCollection(data['lastNames']);
}

export function prefix() {
  return itemFromCollection(data['prefixes']);
}

export function suffix() {
  return itemFromCollection(data['suffixes']);
}

export function title() {
  return [
    itemFromCollection(data['titles']['descriptor']),
    itemFromCollection(data['titles']['level']),
    itemFromCollection(data['titles']['job'])
  ].join(' ');
}
