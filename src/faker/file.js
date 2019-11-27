const data = require("../../data/file.json");

/**
 *
 * @param {import('../faker').Faker} faker
 */
function File(faker) {

  /**
   * @returns {string}
   */
  this.extension = function() {
    return faker.Random.element(data["extensions"]);
  };

  /**
   * @returns {string}
   */
  this.mimeType = function() {
    return faker.Random.element(data["mimeTypes"]);
  };

  /**
   * @param {string} dir
   * @param {string} name
   * @param {string} ext
   * @param {string} directorySeparator
   * @returns {string}
   */
  this.fileName = function(dir=null, name=null, ext=null, directorySeparator="/") {
    dir = dir || faker.Lorem.words(2).join("-");
    name = name || faker.Lorem.word();
    ext = ext || this.extension();

    return `${[dir, name].join(directorySeparator)}.${ext}`;
  };

}

module.exports = File;
