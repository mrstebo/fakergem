'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../data/university.json';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('University', () => {
  describe('#name', () => {
    it('should return a name', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.University.name()).to.eql('name');
    }));
  });
});
