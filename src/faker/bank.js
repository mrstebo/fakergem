const data = require("../../data/bank.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function Bank(faker) {

  /**
   * @returns {string}
   */
  this.name = function() {
    return faker.Random.element(data["names"]);
  };

  /**
   * @returns {string}
   */
  this.swiftBic = function() {
    return faker.Random.element(data["swiftBics"]);
  };

  /**
   * @param {string} bankCountryCode
   * @returns {string}
   */
  this.iban = function(bankCountryCode="GB") {
    const details = data["ibanDetails"].find(x => x["bankCountryCode"] == bankCountryCode.toUpperCase());
    const bcc = `${details["bankCountryCode"]}${faker.Number.between(10, 99)}`;
    const ilc = [...Array(parseInt(details["ibanLetterCode"])).keys()]
      .map(() => String.fromCharCode(65 + faker.Number.between(0, 25)))
      .join("");
    const ib = [...Array(parseInt(details["ibanDigits"])).keys()]
      .map(() => faker.Number.between(0, 9))
      .join("");
    return `${bcc}${ilc}${ib}`;
  };

}

module.exports = Bank;
