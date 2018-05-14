'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/rock-band.json');

describe('RockBand', () => {
  describe('#name', () => {
    it('should return the name of a rock band', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.RockBand.name()).to.be.oneOf(data['names']);
      });
    });
  });
});
