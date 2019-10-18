'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/chuck-norris.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('ChuckNorris', () => {
  describe('#fact', () => {
    it('should return a fact', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['facts']).returns('fact');
      expect(Faker.ChuckNorris.fact()).to.eql('fact');
    }));
  });
});
