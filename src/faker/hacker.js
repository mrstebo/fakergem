import { itemFromCollection } from '../utils/random';

const data = require('../../data/hacker.json');

export function saySomethingSmart() {
  return parseFormat(itemFromCollection(data['phrases']));
}

export function abbreviation() {
  return itemFromCollection(data['abbreviations']);
}

export function adjective() {
  return itemFromCollection(data['adjectives']);
}

export function noun() {
  return itemFromCollection(data['nouns']);
}

export function verb() {
  return itemFromCollection(data['verbs']);
}

export function ingverb() {
  return itemFromCollection(data['ingverbs']);
}

function parseFormat(format) {
  return format
    .replace(/\{abbreviation\}/g, abbreviation())
    .replace(/\{adjective\}/g, adjective())
    .replace(/\{noun\}/g, noun())
    .replace(/\{verb\}/g, verb())
    .replace(/\{ingverb\}/g, ingverb())
    .replace(/^(\w)/, m => m[0].toUpperCase());
}
