'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/app.json';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('App', () => {
  describe('#name', () => {
    it('returns a name', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('x');
      expect(Faker.App.name()).to.eql('x');
    }));
  });

  describe('#version', () => {
    it('returns a version format', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['versions']).returns('#.#.#.#');
      this.stub(Faker.Number, 'between').withArgs(0, 9).returns(1);
      expect(Faker.App.version()).to.eql('1.1.1.1');
    }));
  });

  describe('#author', () => {
    it('returns a name', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Name, 'firstName').returns('John');
      this.stub(Faker.Name, 'lastName').returns('Smith');
      expect(Faker.App.author()).to.eql('John Smith');
    }));
  });
});
