'use strict';
const expect = require('chai').expect;
const ChuckNorris = require('../../src/faker/chuck-norris');
const data = require('../../data/chuck-norris.json');

describe('ChuckNorris', () => {
  describe('#fact', () => {
    it('should return a string', () => {
      expect(ChuckNorris.fact()).to.be.a('string');
    });

    it('should return a fact', () => {
      expect(ChuckNorris.fact()).to.be.oneOf(data['facts']);
    });
  });
});
