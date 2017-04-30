'use strict';
const expect = require('chai').expect;
const DragonBall = require('../../src/faker/dragon-ball');
const data = require('../../data/dragon-ball.json');

describe('DragonBall', () => {
  describe('#character', () => {
    it('should return a character', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(DragonBall.character()).to.be.oneOf(data['characters']);
      });
    });
  });
});
