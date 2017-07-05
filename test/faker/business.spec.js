'use strict';
const chai = require('chai');
const { expect } = chai;
const Business = require('../../src/faker/business');
const data = require('../../data/business.json');

chai.use(require('chai-datetime'));

describe('Business', () => {
  describe('#creditCardNumber', () => {
    it('should return a credit card number', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Business.creditCardNumber()).to.be.oneOf(data['creditCardNumbers']);
      });
    });
  });

  describe('#creditCardExpiryDate', () => {
    it('should return a date in the future', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Business.creditCardExpiryDate()).to.be.afterDate(new Date());
      });
    });
  });

  describe('#creditCardType', () => {
    it('should return a credit card type', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Business.creditCardType()).to.be.oneOf(data['creditCardTypes']);
      });
    });
  });
});
