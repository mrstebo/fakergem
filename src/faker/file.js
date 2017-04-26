import { itemFromCollection } from '../utils/random';

const data = require('../../data/file.json');
const loremData = require('../../data/lorem.json');

export function extension() {
  return itemFromCollection(data['extensions']);
}
export function mimeType() {
  return itemFromCollection(data['mimeTypes']);
}
export function fileName(dir=null, name=null, ext=null, directorySeparator='/') {
  dir = dir || slug();
  name = name || word();
  ext = ext || extension();

  return `${[dir, name].join(directorySeparator)}.${ext}`;
}

function slug() {
  return [...Array(2).keys()].map(_ => word()).join('-');
}

function word() {
  return itemFromCollection(loremData['words']);
}
