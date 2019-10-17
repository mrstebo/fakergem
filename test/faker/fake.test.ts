'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('Fake', () => {
  describe('#f', () => {
    it('returns value for faker method', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Name, 'firstName').returns('Bob');
      expect(Faker.Fake.f('{Name.firstName}')).to.eql('Bob');
    }));

    it('parses hashes as numbers', sinonTest(function(this: typeof sinon) {
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
