'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/index');
const data = require('../../data/zelda.json');

describe('Zelda', () => {
  describe('#game', () => {
    it('should return a game', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['games']).returns('game');
      expect(Faker.Zelda.game()).to.eql('game');
    }));
  });

  describe('#character', () => {
    it('should return a character', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['characters']).returns('character');
      expect(Faker.Zelda.character()).to.eql('character');
    }));
  });

  describe('#location', () => {
    it('should return a location', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['locations']).returns('location');
      expect(Faker.Zelda.location()).to.eql('location');
    }));
  });
});
