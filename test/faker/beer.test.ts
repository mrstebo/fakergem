'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});
const data = require('../../data/beer.json');

describe('Beer', () => {
  describe('#name', () => {
    it('should return a name', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('beer');
      expect(Faker.Beer.name()).to.eql('beer');
    }));
  });

  describe('#style', () => {
    it('should return a style', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['styles']).returns('style');
      expect(Faker.Beer.style()).to.eql('style');
    }));
  });

  describe('#hop', () => {
    it('should return a hop', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['hops']).returns('hop');
      expect(Faker.Beer.hop()).to.eql('hop');
    }));
  });

  describe('#yeast', () => {
    it('should return a yeast', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['yeasts']).returns('yeast');
      expect(Faker.Beer.yeast()).to.eql('yeast');
    }));
  });

  describe('#malt', () => {
    it('should return a malt', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['malts']).returns('malt');
      expect(Faker.Beer.malt()).to.eql('malt');
    }));
  });

  describe('#ibu', () => {
    it('should return a number with IBU suffix', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(10, 99).returns(12);
      expect(Faker.Beer.ibu()).to.eql('12 IBU');
    }));
  });

  describe('#alcohol', () => {
    it('should return a decimal number with a % suffix', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Number, 'betweenF').withArgs(2.0, 10.0).returns(8.95);
      expect(Faker.Beer.alcohol()).to.eql('8.9%');
    }));
  });

  describe('#blg', () => {
    it('should return a number with a °Blg suffix', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Number, 'betweenF').withArgs(2.0, 10.0).returns(5.62);
      expect(Faker.Beer.blg()).to.eql('5.6°Blg');
    }));
  });
});
