import data from '../../data/color.json';

export function hexColor() {
  return `#${leftPad(Math.floor(Math.random() * 0xffffff).toString(16), 6, '0')}`;
}

export function colorName() {
  const colors = data['colorNames'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export function rgbColor() {
  return [...Array(3).keys()].map(_ => {
    return Math.floor(Math.random() * 255);
  });
}

export function hslColor() {
  return [
    Math.floor(Math.random() * 360),
    Math.round(Math.random(), 2),
    Math.round(Math.random(), 2)
  ];
}

function leftPad(text, length, paddingCharacter) {
  let padding = [...Array(length)].map(_ => paddingCharacter).join('');
  return (padding + text).slice(-length);
}
