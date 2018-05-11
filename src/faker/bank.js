import { itemFromCollection, randomNumber } from '../utils/random';

const data = require('../../data/bank.json');

export function name() {
  return itemFromCollection(data['names']);
}

export function swiftBic() {
  return itemFromCollection(data['swiftBics']);
}

export function iban(bankCountryCode='GB') {
  const details = ibanDetails(bankCountryCode);
  const bcc = buildBankCountryCode(details);
  const ilc = buildIbanLetterCode(details);
  const ib = buildIbanDigits(details);
  return `${bcc}${ilc}${ib}`;
}

function ibanDetails(bankCountryCode) {
  return data['ibanDetails'].find(x => x['bankCountryCode'] == bankCountryCode.toUpperCase());
}

function buildBankCountryCode(details) {
  return [
    details['bankCountryCode'],
    randomNumber(0, 9),
    randomNumber(0, 9)
  ].join('');
}

function buildIbanLetterCode(details) {
  return [...Array(parseInt(details['ibanLetterCode'])).keys()].map(_ => {
    return String.fromCharCode(65 + randomNumber(0, 25));
  }).join('');
}

function buildIbanDigits(details) {
  return [...Array(parseInt(details['ibanDigits'])).keys()].map(_ => {
    return randomNumber(0, 9)
  }).join('');
}
