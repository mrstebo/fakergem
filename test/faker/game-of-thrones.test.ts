'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});
const data = require('../../data/game-of-thrones.json');

describe('GameOfThrones', () => {
  describe('#character', () => {
    it('should return a character', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['characters']).returns('character');
      expect(Faker.GameOfThrones.character()).to.eql('character');
    }));
  });

  describe('#house', () => {
    it('should return a house', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['houses']).returns('house');
      expect(Faker.GameOfThrones.house()).to.eql('house');
    }));
  });

  describe('#city', () => {
    it('should return a city', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['cities']).returns('city');
      expect(Faker.GameOfThrones.city()).to.eql('city');
    }));
  });

  describe('#dragon', () => {
    it('should return a dragon', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['dragons']).returns('dragon');
      expect(Faker.GameOfThrones.dragon()).to.eql('dragon');
    }));
  });
});
