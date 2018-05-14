'use strict';
const expect = require('chai').expect;
const orList = require('../support/regexp').orList;
const Faker = require('../../src/faker');
const data = require('../../data/commerce.json');
const colorData = require('../../data/color.json');

describe('Commerce', () => {
  describe('#color', () => {
    it('should return a color', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.color()).to.be.oneOf(colorData['colorNames']);
      });
    });
  });

  describe('#department', () => {
    it('should return a department', () => {
      const re = new RegExp(`(${orList(data['departments'])})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.department()).to.match(re);
      });
    });

    it('should contain no more than the max number of departments if specified', () => {
      const re = new RegExp(`(${orList(data['departments'])}){1,5}`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.department(5)).to.match(re);
      });
    });

    it('should return fixed number of departments if specified', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.department(5, true)).to.match(/\b(?:\w+){5}\b/);
      });
    });
  });

  describe('#productName', () => {
    it('should return a product name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.productName()).to.match(/^([A-Z][a-z]+\s?){3,5}$/);
      });
    });

    it('should start with an adjective', () => {
      const re = new RegExp(`^(${orList(data['productNames']['adjective'])})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.productName()).to.match(re);
      });
    });

    it('should contain a material', () => {
      const re = new RegExp(`(${orList(data['productNames']['material'])})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.productName()).to.match(re);
      });
    });

    it('should contain a product', () => {
      const re = new RegExp(`(${orList(data['productNames']['product'])})$`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.productName()).to.match(re);
      });
    });
  });

  describe('#price', () => {
    it('should return a price', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.price()).to.match(/^\d{1,3}\.\d{2}$/);
      });
    });

    it('should return a price within the specified range', () => {
      const range = {min: 20.0, max: 40.0};
      [...Array(100).keys()].forEach(_ => {
        const price = parseFloat(Faker.Commerce.price(range));
        expect(price).to.be.within(range.min, range.max);
      });
    });
  });

  describe('#promotionCode', () => {
    it('should return a promotion code', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.promotionCode()).to.match(/^[A-Z][a-z]+[A-Z][a-z]+([0-9]{6})$/);
      });
    });

    it('should start with an adjective', () => {
      const re = new RegExp(`^(${orList(data['promotionCodes']['adjective'])})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.promotionCode()).to.match(re);
      });
    });

    it('should contain a noun', () => {
      const re = new RegExp(`^[A-Z][a-z]+(${orList(data['promotionCodes']['noun'])})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.promotionCode()).to.match(re);
      });
    });

    it('should end with a number', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.promotionCode()).to.match(/.*[0-9]{6}$/);
      });
    });

    it('should end with number with specified number of digits', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.promotionCode(24)).to.match(/.*[0-9]{24}$/);
      });
    });
  });
});
