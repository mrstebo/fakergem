import data from '../../data/lorem.json';

// 0-9, a-z
const CHARACTERS = [...Array(10).keys()].concat([...Array(26).keys()].map(i => String.fromCharCode(97+i)));

export function word() {
  return pickOneOf(data['words']);
}

export function words(num=3, supplemental=false) {
  let resolvedNumber = resolveNumber(num);
  let wordList = supplemental ? [...data['words'], data['supplemental']] : data['words'];
  wordList = repeatArray(wordList, ((resolvedNumber / wordList.length) + 1));
  return shuffle(wordList).slice(0, resolvedNumber);
}

export function character() {
  return pickOneOf(CHARACTERS);
}

export function characters(charCount=255) {
  let resolvedNumber = resolveNumber(charCount);
  return [...Array(resolvedNumber).keys()].map(_ => character()).join('');
}

export function sentence(wordCount=4, supplemental=false, randomWordsToAdd=6) {
  const text = capitalize(
    words(wordCount + randomNumber(randomWordsToAdd), supplemental).join(' ')
  );
  return text.length > 0 ? `${text}.` : text;
}

export function sentences(sentenceCount=3, supplemental=false) {
  return [...Array(resolveNumber(sentenceCount)).keys()].map(_ => {
    return sentence(3, supplemental);
  });
}

export function paragraph(sentenceCount=3, supplemental=false, randomSentencesToAdd=3) {

}

export function paragraphs(paragraphCount=3, supplemental=false) {

}

function resolveNumber(n) {
  if (n < 0) {
    return 0;
  }
  return n;
}

function pickOneOf(collection) {
  return collection[randomNumber(collection.length)];
}

function shuffle(collection) {
    let index = -1;
    let length = collection.length;
    let result = Array(length);
    while (++index < length) {
        let rand = randomNumber(index + 1);
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

function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

function capitalize(text) {
  return text.replace(/\b\w/, x => x.toUpperCase());
}
