'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/game-of-thrones.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('GameOfThrones', () => {
  describe('#character', () => {
    it('should return a character', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['characters']).returns('character');
      expect(Faker.GameOfThrones.character()).to.eql('character');
    }));
  });

  describe('#house', () => {
    it('should return a house', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['houses']).returns('house');
      expect(Faker.GameOfThrones.house()).to.eql('house');
    }));
  });

  describe('#city', () => {
    it('should return a city', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['cities']).returns('city');
      expect(Faker.GameOfThrones.city()).to.eql('city');
    }));
  });

  describe('#dragon', () => {
    it('should return a dragon', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['dragons']).returns('dragon');
      expect(Faker.GameOfThrones.dragon()).to.eql('dragon');
    }));
  });
});
