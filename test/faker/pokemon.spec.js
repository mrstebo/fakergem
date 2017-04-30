'use strict';
const expect = require('chai').expect;
const Pokemon = require('../../src/faker/pokemon');
const data = require('../../data/pokemon.json');

describe('Pokemon', () => {
  describe('#name', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Pokemon.name()).to.be.oneOf(data['names']);
      });
    });
  });

  describe('#location', () => {
    it('should return a location', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Pokemon.location()).to.be.oneOf(data['locations']);
      });
    });
  });
});
