const data = require('../../data/company.json');

function luhnAlgorithm(number) {
  const multiplications = `${number}`
    .split('')
    .map((x, i) => i % 2 == 0 ? parseInt(x) * 2 : parseInt(x));
  let sum = 0;
  multiplications.forEach(num => {
    `${num}`.split('').forEach(character => {
      sum += character.charCodeAt(0);
    });
  });

  return sum % 10 == 0 ? 0 : (sum / 10 + 1) * 10 - sum;
}

function mod11(number) {
  const weight = [
    2, 3, 4, 5, 6, 7,
    2, 3, 4, 5, 6, 7,
    2, 3, 4, 5, 6, 7
  ];
  const sum = `${number}`.split('').reverse().reduce((acc, val, index) => {
    return val.charCodeAt(0) * weight[index - 1];
  });
  const remainder = sum % 11;

  return 11 - remainder;
}

function abnChecksum(abn) {
  const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

  return weights.reduce((acc, val, index) => {
    return acc + (val * abn[index-1]);
  });
}

function leftPad(text, length, paddingCharacter) {
  let padding = [...Array(length)].map(_ => paddingCharacter).join('');
  return (padding + text).slice(-length);
}

export default class Company {
  constructor(faker) {
    this.faker = faker;
  }

  name() {
    return this.faker.Random.element(data['names']);
  }

  suffix() {
    return this.faker.Random.element(data['suffixes']);
  }

  catchPhrase() {
    return [...Array(3).keys()]
      .map(i => this.faker.Random.element(data['buzzwords'][i]))
      .join(' ');
  }

  buzzword() {
    return this.faker.Random.element([
      ...data['buzzwords'][0],
      ...data['buzzwords'][1],
      ...data['buzzwords'][2]
    ]);
  }

  bs() {
    return [...Array(3).keys()]
      .map(i => this.faker.Random.element(data['bs'][i]))
      .join(' ');
  }

  ein() {
    return [...Array(9).keys()]
      .map(_ => this.faker.Number.between(0, 9))
      .join('')
      .replace(/(\d{2})(\d{7})/, '$1-$2')
  }

  dunsNumber() {
    return [...Array(9).keys()]
      .map(_ => this.faker.Number.between(0, 9))
      .join('')
      .replace(/(\d{2})(\d{3})(\d{4})/, '$1-$2-$3');
  }

  logo() {
    const number = this.faker.Number.between(1, 14);
    return `https://pigment.github.io/fake-logos/logos/medium/color/${number}.png`
  }

  swedishOrganisationNumber() {
    const base = [
      this.faker.Number.between(1, 9),
      this.faker.Number.between(0, 9),
      this.faker.Number.between(2, 9),
      this.faker.Number.number(6)
    ].join('');
    return `${base}${luhnAlgorithm(base)}`;
  }

  norwegianOrganisationNumber() {
    let mod11Check = null;
    let base = '';
    while (mod11Check == null) {
      base = [
        this.faker.Random.element([8, 9]),
        leftPad(this.faker.Number.between(0, 10000000), 7, '0')
      ].join('');
      mod11Check = mod11(base);
    }
    return `${base}${mod11Check}`;
  }

  australianBusinessNumber() {
    const base = leftPad(this.faker.Number.between(0, 1000000000), 9, '0');
    const abn = `00${base}`;
    return `${(99 - abnChecksum(abn) % 89)}${base}`;
  }

  profession() {
    return this.faker.Random.element(data['professions']);
  }
}
