'use strict';
const expect = require('chai').expect;
const orList = require('../support/regexp').orList;
const Commerce = require('../../src/faker/commerce');
const data = require('../../data/commerce.json');
const colorData = require('../../data/color.json');

describe('Commerce', () => {
  describe('#color', () => {
    it('should return a color', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Commerce.color()).to.be.oneOf(colorData['colorNames']);
      });
    });
  });

  describe('#department', () => {
    it('should return a department', () => {
      const re = new RegExp(`(${orList(data['departments'])})`);
      [...Array(100).keys()].forEach(_ => {
        Commerce.department().split(/[,&]/).map(x => x.trim()).forEach(category => {
          expect(Commerce.department()).to.match(re);
        });
      });
    });
  });

  describe('#productName', () => {
    it('should return a product name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Commerce.productName()).to.match(/^([A-Z][a-z]+\s?){3,5}$/);
      });
    });

    it('should start with an adjective', () => {
      const re = new RegExp(`^(${orList(data['productNames']['adjective'])})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Commerce.productName()).to.match(re);
      });
    });

    it('should contain a material', () => {
      const re = new RegExp(`(${orList(data['productNames']['material'])})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Commerce.productName()).to.match(re);
      });
    });

    it('should contain a product', () => {
      const re = new RegExp(`(${orList(data['productNames']['product'])})$`);
      [...Array(100).keys()].forEach(_ => {
        expect(Commerce.productName()).to.match(re);
      });
    });
  });

  describe('#price', () => {
    it('should return a price', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Commerce.price()).to.be.within(0, 100);
      });
    });
  });

  describe('#promotionCode', () => {
    it('should return a promotion code', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Commerce.promotionCode()).to.match(/^[A-Z][a-z]+[A-Z][a-z]+([0-9]{6})$/);
      });
    });

    it('should start with an adjective', () => {
      const re = new RegExp(`^(${orList(data['promotionCodes']['adjective'])})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Commerce.promotionCode()).to.match(re);
      });
    });

    it('should contain a noun', () => {
      const re = new RegExp(`^[A-Z][a-z]+(${orList(data['promotionCodes']['noun'])})`);
      [...Array(100).keys()].forEach(_ => {
        expect(Commerce.promotionCode()).to.match(re);
      });
    });

    it('should end with a number', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Commerce.promotionCode()).to.match(/.*[0-9]{6}$/);
      });
    });
  });
});
