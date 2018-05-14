'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/chuck-norris.json');

describe('ChuckNorris', () => {
  describe('#fact', () => {
    it('should return a fact', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.ChuckNorris.fact()).to.be.oneOf(data['facts']);
      });
    });
  });
});
