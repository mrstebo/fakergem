import data from '../../data/lorem.json';

export function word() {
  return pickOneOf(data['words']);
}

export function words(num=3, supplemental=false) {
  let wordList = supplemental ? [...data['words'], data['supplemental']] : data['words'];
  wordList = repeatArray(wordList, ((num / wordList.length) + 1));
  return shuffle(wordList).slice(0, num);
}

export function character() {

}

export function characters(charCount=255) {

}

export function sentence(wordCount=4, supplemental=false, randomWordsToAdd=6) {

}

export function sentences(sentenceCount=3, supplemental=false) {

}

export function paragraph(sentenceCount=3, supplemental=false, randomSentencesToAdd=3) {

}

export function paragraphs(paragraphCount=3, supplemental=false) {

}

function pickOneOf(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

function shuffle(collection) {
    let index = -1;
    let length = collection.length;
    let result = Array(length);
    while (++index < length) {
        let rand = Math.floor(Math.random() * (index + 1));
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
