import data from '../../data/friends.json';

export function character() {
  return pickOneOf(data['characters']);
}

export function location() {
  return pickOneOf(data['locations']);
}

export function quote() {
  return pickOneOf(data['quotes']);
}

function pickOneOf(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}
