const data = require("../../data/file.json");

class File {

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
  extension() {
    return this.faker.Random.element(data["extensions"]);
  }

  /**
   * @returns {string}
   */
  mimeType() {
    return this.faker.Random.element(data["mimeTypes"]);
  }

  /**
   * @param {string} dir
   * @param {string} name
   * @param {string} ext
   * @param {string} directorySeparator
   * @returns {string}
   */
  fileName(dir=null, name=null, ext=null, directorySeparator="/") {
    dir = dir || this.faker.Lorem.words(2).join("-");
    name = name || this.faker.Lorem.word();
    ext = ext || this.extension();

    return `${[dir, name].join(directorySeparator)}.${ext}`;
  }

}

module.exports = File;
