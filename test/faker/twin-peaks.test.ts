'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});
const data = require('../../data/twin-peaks.json');

describe('TwinPeaks', () => {
  describe('#character', () => {
    it('should return a character', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['characters']).returns('character');
      expect(Faker.TwinPeaks.character()).to.eql('character');
    }));
  });

  describe('#location', () => {
    it('should return a location', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['locations']).returns('location');
      expect(Faker.TwinPeaks.location()).to.eql('location');
    }));
  });

  describe('#quote', () => {
    it('should return a quote', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['quotes']).returns('quote');
      expect(Faker.TwinPeaks.quote()).to.eql('quote');
    }));
  });
});