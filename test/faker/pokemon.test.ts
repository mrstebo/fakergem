'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/pokemon.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Pokemon', () => {
  describe('#name', () => {
    it('should return a name', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.Pokemon.name()).to.eql('name');
    }));
  });

  describe('#location', () => {
    it('should return a location', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['locations']).returns('location');
      expect(Faker.Pokemon.location()).to.eql('location');
    }));
  });
});
