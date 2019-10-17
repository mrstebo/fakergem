'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});
const data = require('../../data/matz.json');

describe('Matz', () => {
  describe('#quote', () => {
    it('should return a quote', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['quotes']).returns('quote');
      expect(Faker.Matz.quote()).to.eql('quote');
    }));
  });
});
