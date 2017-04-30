'use strict';
const expect = require('chai').expect;
const GameOfThrones = require('../../src/faker/game-of-thrones');
const data = require('../../data/game-of-thrones.json');

describe('GameOfThrones', () => {
  describe('#character', () => {
    it('should return a character', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(GameOfThrones.character()).to.be.oneOf(data['characters']);
      });
    });
  });

  describe('#house', () => {
    it('should return a house', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(GameOfThrones.house()).to.be.oneOf(data['houses']);
      });
    });
  });

  describe('#city', () => {
    it('should return a city', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(GameOfThrones.city()).to.be.oneOf(data['cities']);
      });
    });
  });

  describe('#dragon', () => {
    it('should return a dragon', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(GameOfThrones.dragon()).to.be.oneOf(data['dragons']);
      });
    });
  });
});
