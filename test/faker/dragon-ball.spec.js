'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/dragon-ball.json');

describe('DragonBall', () => {
  describe('#character', () => {
    it('should return a character', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.DragonBall.character()).to.be.oneOf(data['characters']);
      });
    });
  });
});
