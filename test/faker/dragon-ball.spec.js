'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/index');
const data = require('../../data/dragon-ball.json');

describe('DragonBall', () => {
  describe('#character', () => {
    it('should return a character', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['characters']).returns('character');
      expect(Faker.DragonBall.character()).to.eql('character');
    }));
  });
});
