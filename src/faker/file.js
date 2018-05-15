const data = require('../../data/file.json');

export default class File {
  constructor(faker) {
    this.faker = faker;
  }

  extension() {
    return this.faker.Random.element(data['extensions']);
  }

  mimeType() {
    return this.faker.Random.element(data['mimeTypes']);
  }

  fileName(dir=null, name=null, ext=null, directorySeparator='/') {
    dir = dir || [...Array(2).keys()].map(_ => this.faker.Lorem.word()).join('-');
    name = name || this.faker.Lorem.word();
    ext = ext || this.extension();

    return `${[dir, name].join(directorySeparator)}.${ext}`;
  }
}
