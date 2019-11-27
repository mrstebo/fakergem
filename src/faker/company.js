const data = require("../../data/company.json");

function luhnAlgorithm(number) {
  let sum = 0;
  `${number}`
    .split("")
    .map((x, i) => i % 2 == 0 ? parseInt(x) * 2 : parseInt(x))
    .forEach(n => `${n}`.split("").forEach(c => sum += c.charCodeAt(0)));
  return sum % 10 == 0 ? 0 : (sum / 10 + 1) * 10 - sum;
}

function mod11(number) {
  const weight = [
    2, 3, 4, 5, 6, 7,
    2, 3, 4, 5, 6, 7,
    2, 3, 4, 5, 6, 7,
  ];
  const sum = `${number}`.split("").reverse().reduce((acc, val, index) => {
    return val.charCodeAt(0) * weight[index - 1];
  });
  const remainder = sum % 11;

  return 11 - remainder;
}

function abnChecksum(abn) {
  const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

  return weights.reduce((acc, val, index) => {
    return acc + (val * abn[index-1]);
  });
}

function leftPad(text, length, paddingCharacter) {
  let padding = [...Array(length)].map(() => paddingCharacter).join("");
  return (padding + text).slice(-length);
}

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Company(faker) {

  function parse(format) {
    const text = format.replace(/\{(\w+)\}/g, m => `{Company.${m.substring(1)}`);
    return faker.Fake.f(text);
  }

  /**
   * @returns {string}
   */
  this.name = function() {
    return parse(faker.Random.element(data["names"]));
  };

  /**
   * @returns {string}
   */
  this.suffix = function() {
    return faker.Random.element(data["suffixes"]);
  };

  /**
   * @returns {string}
   */
  this.catchPhrase = function() {
    return [...Array(3).keys()]
      .map(i => faker.Random.element(data["buzzwords"][i]))
      .join(" ");
  };

  /**
   * @returns {string}
   */
  this.buzzword = function() {
    return faker.Random.element([
      ...data["buzzwords"][0],
      ...data["buzzwords"][1],
      ...data["buzzwords"][2],
    ]);
  };

  /**
   * @returns {string}
   */
  this.bs = function() {
    return [...Array(3).keys()]
      .map(i => faker.Random.element(data["bs"][i]))
      .join(" ");
  };

  /**
   * @returns {string}
   */
  this.ein = function() {
    return [...Array(9).keys()]
      .map(() => faker.Number.between(0, 9))
      .join("")
      .replace(/(\d{2})(\d{7})/, "$1-$2");
  };

  /**
   * @returns {string}
   */
  this.dunsNumber = function() {
    return [...Array(9).keys()]
      .map(() => faker.Number.between(0, 9))
      .join("")
      .replace(/(\d{2})(\d{3})(\d{4})/, "$1-$2-$3");
  };

  /**
   * @returns {string}
   */
  this.logo = function() {
    const number = faker.Number.between(1, 14);
    return `https://pigment.github.io/fake-logos/logos/medium/color/${number}.png`;
  };

  /**
   * @returns {string}
   */
  this.swedishOrganisationNumber = function() {
    const base = [
      faker.Number.between(1, 9),
      faker.Number.between(0, 9),
      faker.Number.between(2, 9),
      faker.Number.number(6),
    ].join("");
    return `${base}${luhnAlgorithm(base)}`;
  };

  /**
   * @returns {string}
   */
  this.norwegianOrganisationNumber = function() {
    let mod11Check = null;
    let base = "";
    while (mod11Check == null) {
      base = [
        faker.Random.element([8, 9]),
        leftPad(faker.Number.between(0, 10000000), 7, "0"),
      ].join("");
      mod11Check = mod11(base);
    }
    return `${base}${mod11Check}`;
  };

  /**
   * @returns {string}
   */
  this.australianBusinessNumber = function() {
    const base = leftPad(faker.Number.between(0, 1000000000), 9, "0");
    const abn = `00${base}`;
    return `${(99 - abnChecksum(abn) % 89)}${base}`;
  };

  /**
   * @returns {string}
   */
  this.profession = function() {
    return faker.Random.element(data["professions"]);
  };

}

module.exports = Company;
