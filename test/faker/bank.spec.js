'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');
const data = require('../../data/bank.json');

describe('Bank', () => {
  describe('#name', () => {
    it('should return a bank name', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['names']).returns('bank');
      expect(Faker.Bank.name()).to.eql('bank');
    }));
  });

  describe('#swiftBic', () => {
    it('should return a swift bic', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['swiftBics']).returns('swift bic');
      expect(Faker.Bank.swiftBic()).to.eql('swift bic');
    }));
  });

  describe('#iban', () => {
    it('should return an IBAN', sinonTest(function() {
      const betweenStub = this.stub(Faker.Number, 'between');
      betweenStub.withArgs(10, 99).returns(15);
      betweenStub.withArgs(0, 25).returns(3);
      betweenStub.withArgs(0, 9).returns(1);
      expect(Faker.Bank.iban()).to.eql('GB15DDDD11111111111111');
    }));

    it('should return an IBAN for the specified bank country code', sinonTest(function() {
      const betweenStub = this.stub(Faker.Number, 'between');
      betweenStub.withArgs(10, 99).returns(15);
      betweenStub.withArgs(0, 9).returns(1);
      expect(Faker.Bank.iban('FR')).to.eql('FR151111111111111111111111111');
    }));
  });
});
