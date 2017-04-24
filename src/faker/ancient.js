import { itemFromCollection } from '../utils/random';
import data from '../../data/ancient.json';

export function god() {
  return itemFromCollection(data['gods']);
}

export function primordial() {
  return itemFromCollection(data['primordials']);
}

export function titan() {
  return itemFromCollection(data['titans']);
}

export function hero() {
  return itemFromCollection(data['heroes']);
}