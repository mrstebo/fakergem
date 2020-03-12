'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/coffee.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Coffee', () => {
  describe('#blendName', () => {
    it('should return a blend name', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['blendNames']).returns('blend name');
      expect(Faker.Coffee.blendName()).to.eql('blend name');
    }));

    it('should replace placeholders', test(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['blendNames']).returns('{name1} {name2}');
      randomStub.withArgs(data['name1']).returns('n1');
      randomStub.withArgs(data['name2']).returns('n2');
      expect(Faker.Coffee.blendName()).to.eql('n1 n2');
    }));
  });

  describe('#origin', () => {
    it('should return an origin', test(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['countries']).returns('Brazil');
      randomStub.withArgs(data['regions']['brazil']).returns('Mogiana');
      expect(Faker.Coffee.origin()).to.eql('Mogiana, Brazil');
    }));
  });

  describe('#variety', () => {
    it('should return a variety', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['varieties']).returns('variety');
      expect(Faker.Coffee.variety()).to.eql('variety');
    }));
  });

  describe('#notes', () => {
    it('should return notes', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['notes']).returns('notes');
      expect(Faker.Coffee.notes()).to.eql('notes');
    }));

    it('should replace placeholders', test(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['notes']).returns('{intensifier}, {body}, {descriptor}, {descriptor}, {descriptor}');
      randomStub.withArgs(data['intensifiers']).returns('a');
      randomStub.withArgs(data['bodies']).returns('b');
      randomStub.withArgs(data['descriptors']).returns('c');
      expect(Faker.Coffee.notes()).to.eql('a, b, c, c, c');
    }));
  });
});
