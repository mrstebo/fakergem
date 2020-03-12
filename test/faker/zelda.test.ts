'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/zelda.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Zelda', () => {
  describe('#game', () => {
    it('should return a game', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['games']).returns('game');
      expect(Faker.Zelda.game()).to.eql('game');
    }));
  });

  describe('#character', () => {
    it('should return a character', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['characters']).returns('character');
      expect(Faker.Zelda.character()).to.eql('character');
    }));
  });

  describe('#location', () => {
    it('should return a location', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['locations']).returns('location');
      expect(Faker.Zelda.location()).to.eql('location');
    }));
  });
});
