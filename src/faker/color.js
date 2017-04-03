export function hexColor() {
  return `#${leftPad(Math.floor(Math.random() * 0xffffff).toString(16))}`;
}

export function rgbColor() {
  return [...Array(3).keys()].map(_ => {
    return Math.floor(Math.random() * 255);
  });
}

function leftPad(text, length, paddingCharacter) {
  let padding = [...Array(length)].map(_ => paddingCharacter).join('');
  return (padding + text).slice(-length);
}
