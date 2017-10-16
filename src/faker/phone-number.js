import { randomNumber } from '../utils/random';

export function subscriberNumber(length=4) {
  const min = Math.pow(10, length)/10;
  const max = (min * 10) - 1;
  return randomNumber(min, max);
}

export function extension(length=4) {
  return subscriberNumber(length);
}
