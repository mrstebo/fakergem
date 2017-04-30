'use strict';
const expect = require('chai').expect;
const Zelda = require('../../src/faker/zelda');
const data = require('../../data/zelda.json');

describe('Zelda', () => {
  describe('#game', () => {
    it('should return a game', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Zelda.game()).to.be.oneOf(data['games']);
      });
    });
  });

  describe('#character', () => {
    it('should return a character', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Zelda.character()).to.be.oneOf(data['characters']);
      });
    });
  });

  describe('#location', () => {
    it('should return a location', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Zelda.location()).to.be.oneOf(data['locations']);
      });
    });
  });
});
