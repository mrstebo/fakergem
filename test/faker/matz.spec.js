'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/matz.json');

describe('Matz', () => {
  describe('#quote', () => {
    it('should return a quote', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Matz.quote()).to.be.oneOf(data['quotes']);
      });
    });
  });
});
