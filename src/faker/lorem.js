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
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  /**
   * @returns {string}
   */
  word() {
    return this.faker.Random.element(data["words"]);
  }

  /**
   * @param {number} num
   * @param {boolean} supplemental
   * @returns {string[]}
   */
  words(num=3, supplemental=false) {
    const wordList = supplemental ? [...data["words"], data["supplemental"]] : data["words"];
    const words = this.faker.Random.assortment(wordList, resolveNumber(num));
    return words;
  }

  /**
   * @returns {string}
   */
  character() {
    return this.faker.Random.element(CHARACTERS);
  }

  /**
   * @param {number} charCount
   * @returns {string}
   */
  characters(charCount=255) {
    return [...Array(resolveNumber(charCount)).keys()]
      .map(() => this.character()).join("");
  }

  /**
   * @param {number} wordCount
   * @param {boolean} supplemental
   * @param {number} randomWordsToAdd
   * @returns {string}
   */
  sentence(wordCount=4, supplemental=false, randomWordsToAdd=6) {
    const text = capitalize(
      this.words(
        resolveNumber(wordCount) + this.faker.Number.between(0, randomWordsToAdd),
        supplemental
      ).join(" ")
    );
    return text.length > 0 ? `${text}.` : text;
  }

  /**
   * @param {number} sentenceCount
   * @param {boolean} supplemental
   * @returns {string[]}
   */
  sentences(sentenceCount=3, supplemental=false) {
    return [...Array(resolveNumber(sentenceCount)).keys()]
      .map(() => this.sentence(3, supplemental));
  }

  /**
   * @param {number} sentenceCount
   * @param {boolean} supplemental
   * @param {number} randomSentencesToAdd
   * @returns {string}
   */
  paragraph(sentenceCount=3, supplemental=false, randomSentencesToAdd=3) {
    return this.sentences(
      resolveNumber(sentenceCount) + this.faker.Number.between(0, randomSentencesToAdd),
      supplemental
    ).join(" ");
  }

  /**
   * @param {number} paragraphCount
   * @param {boolean} supplemental
   * @returns {string[]}
   */
  paragraphs(paragraphCount=3, supplemental=false) {
    return [...Array(resolveNumber(paragraphCount)).keys()]
      .map(() => this.paragraph(3, supplemental));
  }

}

module.exports = Lorem;
