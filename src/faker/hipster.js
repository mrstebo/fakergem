import { itemFromCollection, randomNumber } from '../utils/random';

const data = require('../../data/hipster.json');
const loremData = require('../../data/lorem.json');

export function word() {
  const randomWord = itemFromCollection(data['words']);
  return randomWord.match(/\s/) ? word() : randomWord;
}

export function words(num=3, supplemental=false, spacesAllowed=false) {
  const resolvedNumber = resolveNumber(num);
  const fullWordList = supplemental ? [...data['words'], loremData['words']] : data['words'];
  const wordList = repeatArray(fullWordList, ((resolvedNumber / fullWordList.length) + 1));

  if (spacesAllowed) {
    return shuffle(wordList).slice(0, resolvedNumber);
  }
  return shuffle(wordList)
    .map(x => `${x}`.match(/\s/) ? word() : x)
    .slice(0, resolvedNumber);
}

export function sentence(wordCount=4, supplemental=false, randomWordsToAdd=6) {
  const text = capitalize(
    words(
      resolveNumber(wordCount) + randomNumber(0, randomWordsToAdd),
      supplemental,
      true
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
  const i = parseInt(n);
  if (i < 0) {
    return 0;
  }
  return i;
}

function repeatArray(collection, n) {
  return Array
    .apply(null, {length: n * collection.length})
    .map((e, i) => collection[i % collection.length]);
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

function capitalize(text) {
  return text.replace(/\b\w/, x => x.toUpperCase());
}
