import data from '../../data/name.json';

export function name() {
  return pickOneOf(data['names']);
}

export function nameWithMiddle() {
  return [
    pickOneOf(data['names']),
    pickOneOf(data['names']),
    pickOneOf(data['lastNames'])
  ].join(' ');
}

export function firstName() {
  return pickOneOf(data['firstNames']);
}

export function lastName() {
  return pickOneOf(data['lastNames']);
}

export function prefix() {
  return pickOneOf(data['prefixes']);
}

export function suffix() {
  return pickOneOf(data['suffixes']);
}

export function title() {
  return [
    pickOneOf(data['titles']['descriptor']),
    pickOneOf(data['titles']['level']),
    pickOneOf(data['titles']['job'])
  ].join(' ');
}

function pickOneOf(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}
