import { itemFromCollection } from '../utils/random';

const data = require('../../data/educator.json');

export function university() {
  return `${name()} ${tertiaryType()}`;
}

export function secondarySchool() {
  return `${name()} ${secondary()}`;
}

export function course() {
  return `${courseType()} ${courseSubject()}`;
}

export function campus() {
  return `${name()} Campus`;
}

function name() {
  return itemFromCollection(data['names']);
}

function tertiaryType() {
  return itemFromCollection(data['tertiaries']['types']);
}

function secondary() {
  return itemFromCollection(data['secondaries']);
}

function courseType() {
  return itemFromCollection(data['tertiaries']['course']['types']);
}

function courseSubject() {
  return itemFromCollection(data['tertiaries']['course']['subjects']);
}
