'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});
const data = require('../../data/chuck-norris.json');

describe('ChuckNorris', () => {
  describe('#fact', () => {
    it('should return a fact', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['facts']).returns('fact');
      expect(Faker.ChuckNorris.fact()).to.eql('fact');
    }));
  });
});
