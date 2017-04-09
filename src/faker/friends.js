import data from '../../data/friends.json';
import { itemFromCollection } from '../utils/random';

export function character() {
  return itemFromCollection(data['characters']);
}

export function location() {
  return itemFromCollection(data['locations']);
}

export function quote() {
  return itemFromCollection(data['quotes']);
}
