import { randomNumber, itemFromCollection } from '../utils/random';

const data = require('../../data/lorem.json');

// 0-9, a-z
const CHARACTERS = [...Array(10).keys()].concat([...Array(26).keys()].map(i => String.fromCharCode(97+i)));

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
        let rand = randomNumber(0, index);
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

export default class Lorem {
  constructor(faker) {
    this.faker = faker;
  }

  word() {
    return itemFromCollection(data['words']);
  }

  words(num=3, supplemental=false) {
    let resolvedNumber = resolveNumber(num);
    let wordList = supplemental ? [...data['words'], data['supplemental']] : data['words'];
    wordList = repeatArray(wordList, ((resolvedNumber / wordList.length) + 1));
    return shuffle(wordList).slice(0, resolvedNumber);
  }

  character() {
    return itemFromCollection(CHARACTERS);
  }

  characters(charCount=255) {
    let resolvedNumber = resolveNumber(charCount);
    return [...Array(resolvedNumber).keys()].map(_ => this.character()).join('');
  }

  sentence(wordCount=4, supplemental=false, randomWordsToAdd=6) {
    const text = capitalize(
      this.words(
        resolveNumber(wordCount) + randomNumber(0, randomWordsToAdd),
        supplemental
      ).join(' ')
    );
    return text.length > 0 ? `${text}.` : text;
  }

  sentences(sentenceCount=3, supplemental=false) {
    return [...Array(resolveNumber(sentenceCount)).keys()].map(_ => {
      return this.sentence(3, supplemental);
    });
  }

  paragraph(sentenceCount=3, supplemental=false, randomSentencesToAdd=3) {
    return this.sentences(
      resolveNumber(sentenceCount) + randomNumber(0, randomSentencesToAdd),
      supplemental
    ).join(' ');
  }

  paragraphs(paragraphCount=3, supplemental=false) {
    return [...Array(resolveNumber(paragraphCount)).keys()].map(_ => {
      return this.paragraph(3, supplemental);
    });
  }
}
