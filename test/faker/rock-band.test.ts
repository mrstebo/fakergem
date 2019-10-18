'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/rock-band.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('RockBand', () => {
  describe('#name', () => {
    it('should return the name of a rock band', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.RockBand.name()).to.eql('name');
    }));
  });
});
