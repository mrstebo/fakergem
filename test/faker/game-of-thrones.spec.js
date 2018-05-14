'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/game-of-thrones.json');

describe('GameOfThrones', () => {
  describe('#character', () => {
    it('should return a character', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.GameOfThrones.character()).to.be.oneOf(data['characters']);
      });
    });
  });

  describe('#house', () => {
    it('should return a house', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.GameOfThrones.house()).to.be.oneOf(data['houses']);
      });
    });
  });

  describe('#city', () => {
    it('should return a city', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.GameOfThrones.city()).to.be.oneOf(data['cities']);
      });
    });
  });

  describe('#dragon', () => {
    it('should return a dragon', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.GameOfThrones.dragon()).to.be.oneOf(data['dragons']);
      });
    });
  });
});
