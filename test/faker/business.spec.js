'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/index');
const data = require('../../data/business.json');

describe('Business', () => {
  describe('#creditCardNumber', () => {
    it('should return a credit card number', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['creditCardNumbers']).returns('123');
      expect(Faker.Business.creditCardNumber()).to.eql('123');
    }));
  });

  describe('#creditCardExpiryDate', () => {
    it('should return a date in the future', sinonTest(function() {
      const expected = new Date();
      expected.setDate(expected.getDate() + (365 * 2));
      expected.setHours(0, 0, 0, 0);
      this.stub(Faker.Number, 'between').withArgs(1, 5).returns(2);
      expect(Faker.Business.creditCardExpiryDate()).to.eql(expected)
    }));
  });

  describe('#creditCardType', () => {
    it('should return a credit card type', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['creditCardTypes']).returns('Visa');
      expect(Faker.Business.creditCardType()).to.eql('Visa');
    }));
  });
});
