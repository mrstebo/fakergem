'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});
const data = require('../../data/rock-band.json');

describe('RockBand', () => {
  describe('#name', () => {
    it('should return the name of a rock band', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.RockBand.name()).to.eql('name');
    }));
  });
});
