'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/ru-paul.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('RuPaul', () => {
  describe('#quote', () => {
    it('should return a quote', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['quotes']).returns('quote');
      expect(Faker.RuPaul.quote()).to.eql('quote');
    }));
  });
});
