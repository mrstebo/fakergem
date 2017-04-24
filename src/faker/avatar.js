import data from '../../data/lorem.json';
import { itemFromCollection } from '../utils/random';

const SUPPORTED_FORMATS = ['png', 'jpg', 'bmp'];

export function image(slug=null, size='300x300', format='png', set='set1', bgset=null) {
  if (!isValidSize(size)) {
    throw new Error('Size should be specified in format 300x300');
  }
  if (!isFormatSupported(format)) {
    throw new Error(`Supported formats are ${SUPPORTED_FORMATS.join(', ')}`);
  }
  const filename = `${slug || words()}.${format}`;
  const bgsetQuery = bgset ? `&bgset=${bgset}` : '';

  return `https://robohash.org/${filename}?size=${size}&set=${set}${bgsetQuery}`;
}

function isValidSize(size) {
  return /^\d+x\d+$/.test(size);
}

function isFormatSupported(format) {
  return SUPPORTED_FORMATS.indexOf(format) >= 0;
}

function words() {
  return [...Array(3).keys()].map(_ => itemFromCollection(data['words'])).join('-');
}
