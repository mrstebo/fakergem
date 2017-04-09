import data from '../../data/lorem.json';
import { randomNumber, itemFromCollection } from '../utils/random';

// 0-9, a-z
const CHARACTERS = [...Array(10).keys()].concat([...Array(26).keys()].map(i => String.fromCharCode(97+i)));

export function word() {
  return itemFromCollection(data['words']);
}

export function words(num=3, supplemental=false) {
  let resolvedNumber = resolveNumber(num);
  let wordList = supplemental ? [...data['words'], data['supplemental']] : data['words'];
  wordList = repeatArray(wordList, ((resolvedNumber / wordList.length) + 1));
  return shuffle(wordList).slice(0, resolvedNumber);
}

export function character() {
  return itemFromCollection(CHARACTERS);
}

export function characters(charCount=255) {
  let resolvedNumber = resolveNumber(charCount);
  return [...Array(resolvedNumber).keys()].map(_ => character()).join('');
}

export function sentence(wordCount=4, supplemental=false, randomWordsToAdd=6) {
  const text = capitalize(
    words(
      resolveNumber(wordCount) + randomNumber(0, randomWordsToAdd),
      supplemental
    ).join(' ')
  );
  return text.length > 0 ? `${text}.` : text;
}

export function sentences(sentenceCount=3, supplemental=false) {
  return [...Array(resolveNumber(sentenceCount)).keys()].map(_ => {
    return sentence(3, supplemental);
  });
}

export function paragraph(sentenceCount=3, supplemental=false, randomSentencesToAdd=3) {
  return sentences(
    resolveNumber(sentenceCount) + randomNumber(0, randomSentencesToAdd),
    supplemental
  ).join(' ');
}

export function paragraphs(paragraphCount=3, supplemental=false) {
  return [...Array(resolveNumber(paragraphCount)).keys()].map(_ => {
    return paragraph(3, supplemental);
  });
}

function resolveNumber(n) {
  if (n < 0) {
    return 0;
  }
  return n;
}

function shuffle(collection) {
    let index = -1;
    let length = collection.length;
    let result = Array(length);
    while (++index < length) {
        let rand = randomNumber(0, index + 1);
        result[index] = result[rand];
        result[rand] = collection[index];
    }
    return result;
}

function repeatArray(collection, n) {
  return Array
    .apply(null, {length: n * collection.length})
    .map((e, i) => collection[i % collection.length]);
}

function capitalize(text) {
  return text.replace(/\b\w/, x => x.toUpperCase());
}
