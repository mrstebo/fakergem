'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/superhero.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Superhero', () => {
  describe('#name', () => {
    it('should return a formatted name', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('name');
      expect(Faker.Superhero.name()).to.eql('name');
    }));

    it('should replace placeholders', test(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element')
      randomStub.withArgs(data['names']).returns('{prefix} {suffix} {descriptor}');
      randomStub.withArgs(data['prefixes']).returns('p');
      randomStub.withArgs(data['suffixes']).returns('s');
      randomStub.withArgs(data['descriptors']).returns('d');
      expect(Faker.Superhero.name()).to.eql('p s d');
    }));
  });

  describe('#power', () => {
    it('should return a power', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['powers']).returns('power');
      expect(Faker.Superhero.power()).to.eql('power');
    }));
  });

  describe('#prefix', () => {
    it('should return a prefix', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['prefixes']).returns('prefix');
      expect(Faker.Superhero.prefix()).to.eql('prefix');
    }));
  });

  describe('#suffix', () => {
    it('should return a suffix', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['suffixes']).returns('suffix');
      expect(Faker.Superhero.suffix()).to.eql('suffix');
    }));
  });

  describe('#descriptor', () => {
    it('should return a descriptor', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['descriptors']).returns('descriptor');
      expect(Faker.Superhero.descriptor()).to.eql('descriptor');
    }));
  });
});
