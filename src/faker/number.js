export function number(digits=10) {
  let num = '';
  if (digits > 1) {
    num = `${nonZeroDigit()}`;
    digits -= 1;
  }
  return parseInt(num + leadingZeroNumber(digits));
}

export function decimal(leftDigits=5, rightDigits=2) {
  return `${number(leftDigits)}.${decimalPart(rightDigits)}`;
}

export function normal(mean=1, standardDeviation=1) {
  let theta = 2 * Math.PI * Math.random();
  let rho = Math.sqrt(-2 * Math.log(1 - Math.random()));
  let scale = standardDeviation * rho;
  return mean + scale * Math.cos(theta);
}

export function hexadecimal(digits=6) {
  return [...Array(digits).keys()]
    .map(_ => Math.floor(Math.random() * 15).toString(16))
    .join('');
}

export function between(from=1.00, to=5000.00) {
  let min = Math.min(from, to);
  let max = Math.max(from, to);
  return Math.floor(Math.random() * (max - min)) + min;
}

export function positive(from=1.00, to=5000.00) {
  let value = between(from, to);
  return value < 0 ? (value *= -1) : value;
}

export function negative(from=-1.00, to=-5000.00) {
  let value = between(from, to);
  return value < 0 ? value : (value *= -1);
}

export function digit() {
  return Math.floor(Math.random() * 10);
}

function nonZeroDigit() {
  return Math.floor(Math.random() * 9) + 1;
}

function decimalPart(digits) {
  let num = '';
  if (digits > 1) {
    num = `${nonZeroDigit()}`;
    digits -= 1;
  }
  return leadingZeroNumber(digits) + num;
}

function leadingZeroNumber(digits) {
  return [...Array(digits).keys()]
    .map(_ => digit())
    .join('');
}
