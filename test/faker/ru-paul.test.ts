'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../data/ru-paul.json';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('RuPaul', () => {
  describe('#quote', () => {
    it('should return a quote', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['quotes']).returns('quote');
      expect(Faker.RuPaul.quote()).to.eql('quote');
    }));
  });
});
