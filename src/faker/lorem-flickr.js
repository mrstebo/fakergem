const SUPPORTED_COLORIZATIONS = ['red', 'green', 'blue'];

export function image(size='300x300', searchTerms=[], matchAll=false) {
  return buildUrl(size, null, searchTerms, matchAll);
}

export function grayscaleImage(size='300x300', searchTerms=['all'], matchAll=false) {
  if (!hasSearchTerms(searchTerms)) {
    throw new Error('Search terms must be specified for grayscale images');
  }

  return buildUrl(size, 'g', searchTerms, matchAll);
}

export function pixelatedImage(size='300x300', searchTerms=['all'], matchAll=false) {
  if (!hasSearchTerms(searchTerms)) {
    throw new Error('Search terms must be specified for pixelated images');
  }

  return buildUrl(size, 'p', searchTerms, matchAll);
}

export function colorizedImage(size='300x300', color='red', searchTerms=['all'], matchAll=false) {
  if (!hasSearchTerms(searchTerms)) {
    throw new Error('Search terms must be specified for colorized images');
  }
  if (!isColorizationSupported(color)) {
    throw new Error(`Supported colorizations are ${SUPPORTED_COLORIZATIONS.join(', ')}`);
  }

  return buildUrl(size, color, searchTerms, matchAll);
}

function buildUrl(size, format, searchTerms, matchAll) {
  if (!isValidSize(size)) {
    throw new Error('Size should be specified in format 300x300');
  }

  let url = 'http://loremflickr.com';
  if (format) {
    url += `/${format}`;
  }
  url += `/${size.replace('x', '/')}`;
  if ((searchTerms || []).length > 0) {
    url += `/${searchTerms.join(',')}`;
  }
  if (matchAll) {
    url += '/all';
  }
  return url;
}

function hasSearchTerms(searchTerms) {
  return (searchTerms || []).length > 0;
}

function isColorizationSupported(color) {
  return SUPPORTED_COLORIZATIONS.indexOf(color) >= 0;
}

function isValidSize(size) {
  return /^\d+x\d+$/.test(size);
}
