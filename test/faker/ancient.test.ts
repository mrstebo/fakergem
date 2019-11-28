'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/ancient.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Ancient', () => {
  describe('#god', () => {
    it('should return a god', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['gods']).returns('god');
      expect(Faker.Ancient.god()).to.eql('god');
    }));
  });

  describe('#primordial', () => {
    it('should return a primordial', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['primordials']).returns('primordial');
      expect(Faker.Ancient.primordial()).to.eql('primordial');
    }));
  });

  describe('#titan', () => {
    it('should return a titan', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['titans']).returns('titan');
      expect(Faker.Ancient.titan()).to.eql('titan');
    }));
  });

  describe('#hero', () => {
    it('should return a hero', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['heroes']).returns('hero');
      expect(Faker.Ancient.hero()).to.eql('hero');
    }));
  });
});
