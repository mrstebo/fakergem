'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});
const data = require('../../data/friends.json');

describe('Friends', () => {
  describe('#character', () => {
    it('should return a character', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['characters']).returns('character');
      expect(Faker.Friends.character()).to.eql('character');
    }));
  });

  describe('#location', () => {
    it('should return a location', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['locations']).returns('location');
      expect(Faker.Friends.location()).to.eql('location');
    }));
  });

  describe('#quote', () => {
    it('should return a quote', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['quotes']).returns('quote');
      expect(Faker.Friends.quote()).to.eql('quote');
    }));
  });
});
