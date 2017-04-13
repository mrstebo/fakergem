import data from '../../data/rock-band.json';
import { itemFromCollection } from '../utils/random';

export function name() {
  return itemFromCollection(data['names']);
}
