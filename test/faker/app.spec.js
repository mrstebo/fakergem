'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');
const appData = require('../../data/app.json');

describe('App', () => {
  describe('#name', () => {
    it('returns a name', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(appData['names']).returns('x');
      expect(Faker.App.name()).to.eql('x');
    }));
  });

  describe('#version', () => {
    it('returns a version format', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(appData['versions']).returns('#.#.#.#');
      this.stub(Faker.Number, 'between').withArgs(0, 9).returns(1);
      expect(Faker.App.version()).to.eql('1.1.1.1');
    }));
  });

  describe('#author', () => {
    it('returns a name', sinonTest(function() {
      this.stub(Faker.Name, 'firstName').returns('John');
      this.stub(Faker.Name, 'lastName').returns('Smith');
      expect(Faker.App.author()).to.eql('John Smith');
    }));
  });
});
