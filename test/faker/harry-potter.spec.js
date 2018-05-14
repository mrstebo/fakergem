'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/harry-potter.json');

describe('HarryPotter', () => {
  describe('#character', () => {
    it('should return a character', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.HarryPotter.character()).to.be.oneOf(data['characters']);
      });
    });
  });

  describe('#location', () => {
    it('should return a location', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.HarryPotter.location()).to.be.oneOf(data['locations']);
      });
    });
  });

  describe('#quote', () => {
    it('should return a quote', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.HarryPotter.quote()).to.be.oneOf(data['quotes']);
      });
    });
  });

  describe('#book', () => {
    it('should return a book', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.HarryPotter.book()).to.be.oneOf(data['books']);
      });
    });
  });
});
