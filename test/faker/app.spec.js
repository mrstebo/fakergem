'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const Faker = require('../../src/faker');
const appData = require('../../data/app.json');
const nameData = require('../../data/name.json');

describe('App', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('#name', () => {
    it('returns a name', () => {
      sandbox.stub(Faker.Random, 'element')
        .withArgs(appData['names'])
        .returns('x');
      expect(Faker.App.name()).to.eql('x');
    });
  });

  describe('#version', () => {
    it('returns a version format', () => {
      sandbox.stub(Faker.Random, 'element')
        .withArgs(appData['versions'])
        .returns('#.#.#.#');
      sandbox.stub(Faker.Number, 'between')
        .withArgs(0, 9)
        .returns(1);
      expect(Faker.App.version()).to.eql('1.1.1.1');
    });
  });

  describe('#author', () => {
    it('returns a name', () => {
      const stub = sandbox.stub(Faker.Random, 'element');
      stub.withArgs(nameData['firstNames']).returns('John');
      stub.withArgs(nameData['lastNames']).returns('Smith');
      expect(Faker.App.author()).to.eql('John Smith');
    });
  });
});
