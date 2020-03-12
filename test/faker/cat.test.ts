'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/cat.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Cat', () => {
  describe('#name', () => {
    it('should return a name', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.Cat.name()).to.eql('name');
    }));
  });

  describe('#breed', () => {
    it('should return a breed', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['breeds']).returns('breed');
      expect(Faker.Cat.breed()).to.eql('breed');
    }));
  });

  describe('#registry', () => {
    it('should return a registry', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['registries']).returns('registry');
      expect(Faker.Cat.registry()).to.eql('registry');
    }));
  });
});
