'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/lord-of-the-rings.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('LordOfTheRings', () => {
  describe('#character', () => {
    it('should return a character', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['characters']).returns('character');
      expect(Faker.LordOfTheRings.character()).to.eql('character');
    }));
  });

  describe('#location', () => {
    it('should return a location', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['locations']).returns('location');
      expect(Faker.LordOfTheRings.location()).to.eql('location');
    }));
  });
});
