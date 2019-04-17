'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');

describe('Code', () => {
  describe('#isbn', () => {
  });

  describe('#ean', () => {
  });

  describe('#imei', () => {
  });

  describe('#asin', () => {
  });

  describe('#npi', () => {
    it('should return an National Provider Identifier (NPI) number', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(0, 9999999999).returns('123');
      expect(Faker.Code.npi()).to.eql('0000000123');
    }));

    it('should return a 10 digit number', () => {
      expect(Faker.Code.npi()).to.match(/^\d{10}$/);
    });
  });

  describe('#rut', () => {
  });

  describe('#nric', () => {
  });
});
