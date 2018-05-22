'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');
const data = require('../../data/game-of-thrones.json');

describe('GameOfThrones', () => {
  describe('#character', () => {
    it('should return a character', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['characters']).returns('character');
      expect(Faker.GameOfThrones.character()).to.eql('character');
    }));
  });

  describe('#house', () => {
    it('should return a house', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['houses']).returns('house');
      expect(Faker.GameOfThrones.house()).to.eql('house');
    }));
  });

  describe('#city', () => {
    it('should return a city', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['cities']).returns('city');
      expect(Faker.GameOfThrones.city()).to.eql('city');
    }));
  });

  describe('#dragon', () => {
    it('should return a dragon', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['dragons']).returns('dragon');
      expect(Faker.GameOfThrones.dragon()).to.eql('dragon');
    }));
  });
});
