import { itemFromCollection, randomFloat, randomNumber } from '../utils/random';

const data = require('../../data/commerce.json');
const colorData = require('../../data/color.json');

function buildCategories(num) {
  const categories = [];
  while (categories.length < num) {
    const category = itemFromCollection(data['departments']);
    if (categories.indexOf(category) < 0) {
      categories.push(category);
    }
  }
  return categories;
}

function mergeCategories(categories) {
  const separator = ' & ';
  const commaSeparated = categories.slice(0, -1).join(', ');
  const lastCategory = categories.slice(-1);
  return [commaSeparated, lastCategory].join(separator);
}

function number(digits) {
  return [...Array(digits).keys()].map(_ => randomNumber(0, 9)).join('');
}

export default class Commerce {
  constructor(faker) {
    this.faker = faker;
  }

  color() {
    return itemFromCollection(colorData['colorNames']);
  }

  department(max=3, fixedAmount=false) {
    const num = fixedAmount ? max : (1 + randomNumber(0, max));
    const categories = buildCategories(num);
    return num > 1 ? mergeCategories(categories) : categories[0];
  }

  productName() {
    return [
      itemFromCollection(data['productNames']['adjective']),
      itemFromCollection(data['productNames']['material']),
      itemFromCollection(data['productNames']['product'])
    ].join(' ');
  }

  price(range={min: 0, max: 100}) {
    return (Math.floor(randomFloat(range.min, range.max) * 100) / 100.0).toFixed(2);
  }

  promotionCode(digits=6) {
    return [
      itemFromCollection(data['promotionCodes']['adjective']),
      itemFromCollection(data['promotionCodes']['noun']),
      number(digits)
    ].join('');
  }
}
