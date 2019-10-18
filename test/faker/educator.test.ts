'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/educator.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Educator', () => {
  describe('#university', () => {
    it('should return a university', test(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['names']).returns('name');
      randomStub.withArgs(data['tertiaries']['types']).returns('tertiary');
      expect(Faker.Educator.university()).to.eql('name tertiary');
    }));
  });

  describe('#secondarySchool', () => {
    it('should return a secondary school', test(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['names']).returns('name');
      randomStub.withArgs(data['secondaries']).returns('secondary');
      expect(Faker.Educator.secondarySchool()).to.eql('name secondary');
    }));
  });

  describe('#course', () => {
    it('should return a course', test(function(this: typeof sinon) {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(data['tertiaries']['course']['types']).returns('course');
      randomStub.withArgs(data['tertiaries']['course']['subjects']).returns('subject');
      expect(Faker.Educator.course()).to.eql('course subject');
    }));
  });

  describe('#campus', () => {
    it('should return a campus', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('Name');
      expect(Faker.Educator.campus()).to.eql('Name Campus');
    }));
  });
});
