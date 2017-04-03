export function hexColor() {
  return `#${(Math.floor(Math.random() * 0xffffff)).toString(16)}`;
}

export function rgbColor() {
  return [...Array(3).keys()].map(_ => {
    return Math.floor(Math.random() * 255);
  });
}
