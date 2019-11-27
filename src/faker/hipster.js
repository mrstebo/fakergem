const data = require("../../data/hipster.json");
const loremData = require("../../data/lorem.json");

function resolveNumber(n) {
  return Math.max(parseInt(n), 0);
}

function capitalize(text) {
  return text.replace(/\b\w/, x => x.toUpperCase());
}

class Hipster {

  /**
   *
   * @param {import('../faker').Faker} faker
   */
  constructor(faker) {
    this.faker = faker;
  }

  word() {
    const item = this.faker.Random.element(data["words"]);
    return item.match(/\s/) ? this.word() : item; // Make sure we get a single word
  }

  words(num=3, supplemental=false, spacesAllowed=false) {
    const wordList = supplemental ? [...data["words"], loremData["words"]] : data["words"];
    const words = this.faker.Random.assortment(wordList, resolveNumber(num));
    return spacesAllowed
      ? words
      : words.map(x => `${x}`.match(/\s/) ? this.word() : x);
  }

  sentence(wordCount=4, supplemental=false, randomWordsToAdd=6) {
    const words = this.words(
      resolveNumber(wordCount) + this.faker.Number.between(0, randomWordsToAdd),
      supplemental,
      true
    );
    const text = capitalize(words.join(" "));
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

module.exports = Hipster;
