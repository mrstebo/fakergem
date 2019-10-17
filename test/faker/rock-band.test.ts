'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../data/rock-band.json';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('RockBand', () => {
  describe('#name', () => {
    it('should return the name of a rock band', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.RockBand.name()).to.eql('name');
    }));
  });
});
