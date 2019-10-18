'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/food.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Food', () => {
  describe('#ingredient', () => {
    it('should return a ingredient', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['ingredients']).returns('ingredient');
      expect(Faker.Food.ingredient()).to.eql('ingredient');
    }));
  });

  describe('#spice', () => {
    it('should return a spice', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['spices']).returns('spice');
      expect(Faker.Food.spice()).to.eql('spice');
    }));
  });

  describe('#measurement', () => {
    it('should return a measurement', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['measurements']).returns('measurement');
      expect(Faker.Food.measurement()).to.eql('measurement');
    }));
  });
});
