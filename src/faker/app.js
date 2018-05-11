const data = require('../../data/app.json');
const nameData = require('../../data/name.json');

module.exports = (faker={}) => ({
  name: () => {
    return faker.Random.item(data['names']);
  },
  version: () => {
    return faker.Random.item(data['versions'])
    .split('.')
    .map(x => x.replace(/#/g, () => faker.Number.between(0, 9)))
    .join('.');
  },
  author: () => {
    return [
      faker.Random.item(nameData['firstNames']),
      faker.Random.item(nameData['lastNames'])
    ].join(' ');
  }
});
