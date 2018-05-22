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

    it('parses hashes as numbers', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(0, 9).returns(5);
      expect(Faker.Fake.f('#-##-###-####')).to.eql('5-55-555-5555');
    }));

    it('throws an error if no string specified', () => {
      expect(() => Faker.Fake.f()).to.throw('A string must be specified');
    });

    it('throws error if module not found', () => {
      expect(() => Faker.Fake.f('{BAD.run}')).to.throw('Invalid module: BAD');
    });

    it('throws error if method not found', () => {
      expect(() => Faker.Fake.f('{Name.bad}')).to.throw('Invalid method: Name.bad');
    });
  });
});
