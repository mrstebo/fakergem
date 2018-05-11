'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');

describe('Fake', () => {
  describe('#f', () => {
    it('returns value for faker method', sinonTest(function() {
      this.stub(Faker.Name, 'firstName').returns('Bob');
      expect(Faker.Fake.f('{Name.firstName}')).to.eql('Bob');
    }));

    it('throws error if module not found', () => {
      expect(() => Faker.Fake.f('{BAD.run}')).to.throw('Invalid module: BAD');
    });

    it('throws error if method not found', () => {
      expect(() => Faker.Fake.f('{Name.bad}')).to.throw('Invalid method: Name.bad');
    });
  });
});
