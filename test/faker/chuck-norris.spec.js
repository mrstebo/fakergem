'use strict';
const expect = require('chai').expect;
const ChuckNorris = require('../../src/faker/chuck-norris');
const data = require('../../data/chuck-norris.json');

describe('ChuckNorris', () => {
  describe('#fact', () => {
    it('should return a fact', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(ChuckNorris.fact()).to.be.oneOf(data['facts']);
      });
    });
  });
});
