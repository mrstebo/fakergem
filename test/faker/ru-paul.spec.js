'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/ru-paul.json');

describe('RuPaul', () => {
  describe('#quote', () => {
    it('should return a quote', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.RuPaul.quote()).to.be.oneOf(data['quotes']);
      });
    });
  });
});
