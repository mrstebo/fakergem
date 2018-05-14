import { itemFromCollection } from '../utils/random';

const data = require('../../data/file.json');
const loremData = require('../../data/lorem.json');

function slug() {
  return [...Array(2).keys()].map(_ => word()).join('-');
}

function word() {
  return itemFromCollection(loremData['words']);
}

export default class File {
  constructor(faker) {
    this.faker = faker;
  }

  extension() {
    return itemFromCollection(data['extensions']);
  }

  mimeType() {
    return itemFromCollection(data['mimeTypes']);
  }

  fileName(dir=null, name=null, ext=null, directorySeparator='/') {
    dir = dir || slug();
    name = name || word();
    ext = ext || this.extension();

    return `${[dir, name].join(directorySeparator)}.${ext}`;
  }
}
