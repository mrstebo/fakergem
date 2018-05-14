'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/friends.json');

describe('Friends', () => {
  describe('#character', () => {
    it('should return a character', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Friends.character()).to.be.oneOf(data['characters']);
      });
    });
  });

  describe('#location', () => {
    it('should return a location', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Friends.location()).to.be.oneOf(data['locations']);
      });
    });
  });

  describe('#quote', () => {
    it('should return a quote', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Friends.quote()).to.be.oneOf(data['quotes']);
      });
    });
  });
});
