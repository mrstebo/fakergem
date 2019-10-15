'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/index');
const data = require('../../data/ancient.json');

describe('Ancient', () => {
  describe('#god', () => {
    it('should return a god', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['gods']).returns('god');
      expect(Faker.Ancient.god()).to.eql('god');
    }));
  });

  describe('#primordial', () => {
    it('should return a primordial', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['primordials']).returns('primordial');
      expect(Faker.Ancient.primordial()).to.eql('primordial');
    }));
  });

  describe('#titan', () => {
    it('should return a titan', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['titans']).returns('titan');
      expect(Faker.Ancient.titan()).to.eql('titan');
    }));
  });

  describe('#hero', () => {
    it('should return a hero', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['heroes']).returns('hero');
      expect(Faker.Ancient.hero()).to.eql('hero');
    }));
  });
});
