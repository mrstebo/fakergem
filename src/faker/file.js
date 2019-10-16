const data = require("../../data/file.json");

module.exports = class File {
  constructor(faker) {
    this.faker = faker;
  }

  extension() {
    return this.faker.Random.element(data["extensions"]);
  }

  mimeType() {
    return this.faker.Random.element(data["mimeTypes"]);
  }

  fileName(dir=null, name=null, ext=null, directorySeparator="/") {
    dir = dir || this.faker.Lorem.words(2).join("-");
    name = name || this.faker.Lorem.word();
    ext = ext || this.extension();

    return `${[dir, name].join(directorySeparator)}.${ext}`;
  }
};
