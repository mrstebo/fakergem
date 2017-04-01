export function image(size='300x300', format='png', backgroundColor=null, textColor=null, text=null) {
  if (!isValidSize(size)) {
    throw new Error('Size should be specified in format 300x300');
  }

  let url = `https://placehold.it/${size}.${format}`;
  if (backgroundColor) {
    url += `/${backgroundColor}`;
  }
  if (textColor) {
    url += `/${textColor}`;
  }
  if (text) {
    url += `?text=${text}`;
  }
  return url;
}

function isValidSize(size) {
  return /^\d+x\d+$/.test(size);
}
