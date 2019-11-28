'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/bank.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('Bank', () => {
  describe('#name', () => {
    it('should return a bank name', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('bank');
      expect(Faker.Bank.name()).to.eql('bank');
    }));
  });

  describe('#swiftBic', () => {
    it('should return a swift bic', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['swiftBics']).returns('swift bic');
      expect(Faker.Bank.swiftBic()).to.eql('swift bic');
    }));
  });

  describe('#iban', () => {
    it('should return an IBAN', test(function(this: typeof sinon) {
      const betweenStub = this.stub(Faker.Number, 'between');
      betweenStub.withArgs(10, 99).returns(15);
      betweenStub.withArgs(0, 25).returns(3);
      betweenStub.withArgs(0, 9).returns(1);
      expect(Faker.Bank.iban()).to.eql('GB15DDDD11111111111111');
    }));

    it('should return an IBAN for the specified bank country code', test(function(this: typeof sinon) {
      const betweenStub = this.stub(Faker.Number, 'between');
      betweenStub.withArgs(10, 99).returns(15);
      betweenStub.withArgs(0, 9).returns(1);
      expect(Faker.Bank.iban('FR')).to.eql('FR151111111111111111111111111');
    }));
  });
});
