const data = require("../../data/lorem.json");

// 0-9, a-z
const CHARACTERS = [...Array(10).keys()].concat([...Array(26).keys()].map(i => String.fromCharCode(97+i)));

function resolveNumber(n) {
  return Math.max(parseInt(n), 0);
}

function capitalize(text) {
  return text.replace(/\b\w/, x => x.toUpperCase());
}

class Lorem {

  /**
   *
   * @param {Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  word() {
    return this.faker.Random.element(data["words"]);
  }

  words(num=3, supplemental=false) {
    const wordList = supplemental ? [...data["words"], data["supplemental"]] : data["words"];
    const words = this.faker.Random.assortment(wordList, resolveNumber(num));
    return words;
  }

  character() {
    return this.faker.Random.element(CHARACTERS);
  }

  characters(charCount=255) {
    return [...Array(resolveNumber(charCount)).keys()]
      .map(() => this.character()).join("");
  }

  sentence(wordCount=4, supplemental=false, randomWordsToAdd=6) {
    const text = capitalize(
      this.words(
        resolveNumber(wordCount) + this.faker.Number.between(0, randomWordsToAdd),
        supplemental
      ).join(" ")
    );
    return text.length > 0 ? `${text}.` : text;
  }

  sentences(sentenceCount=3, supplemental=false) {
    return [...Array(resolveNumber(sentenceCount)).keys()]
      .map(() => this.sentence(3, supplemental));
  }

  paragraph(sentenceCount=3, supplemental=false, randomSentencesToAdd=3) {
    return this.sentences(
      resolveNumber(sentenceCount) + this.faker.Number.between(0, randomSentencesToAdd),
      supplemental
    ).join(" ");
  }

  paragraphs(paragraphCount=3, supplemental=false) {
    return [...Array(resolveNumber(paragraphCount)).keys()]
      .map(() => this.paragraph(3, supplemental));
  }

}

module.exports = Lorem;
