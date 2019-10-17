'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../data/phone-number.json';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});

describe('PhoneNumber', () => {
  describe('#phoneNumber', () => {
    it('should return a phone number', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['phoneNumber']['formats']).returns('###-####-#####');
      this.stub(Faker.Number, 'between').withArgs(0, 9).returns(8);
      expect(Faker.PhoneNumber.phoneNumber()).to.eql('888-8888-88888');
    }));
  });

  describe('#cellPhone', () => {
    it('should return a cellphone number', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['cellPhone']['formats']).returns('###-####-#####');
      this.stub(Faker.Number, 'between').withArgs(0, 9).returns(8);
      expect(Faker.PhoneNumber.cellPhone()).to.eql('888-8888-88888');
    }));
  });

  describe('#areaCode', () => {
    it('should return an area code', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['areaCodes']).returns('area code');
      expect(Faker.PhoneNumber.areaCode()).to.eql('area code');
    }));
  });

  describe('#exchangeCode', () => {
    it('should return an exchange code', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['exchangeCodes']).returns('exchange code');
      expect(Faker.PhoneNumber.exchangeCode()).to.eql('exchange code');
    }));
  });

  describe('#subscriberNumber', () => {
    it('should return a number', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(1000, 9999).returns(1234);
      expect(Faker.PhoneNumber.subscriberNumber()).to.eql('1234');
    }));

    it('should return a number with the specified length', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.Number, 'between').withArgs(10000000, 99999999).returns(12345678);
      expect(Faker.PhoneNumber.subscriberNumber(8)).to.eql('12345678');
    }));
  });

  describe('#extension', () => {
    it('should return a number', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.PhoneNumber, 'subscriberNumber').withArgs(4).returns('1234');
      expect(Faker.PhoneNumber.extension()).to.eql('1234');
    }));

    it('should return a number with the specified length', sinonTest(function(this: typeof sinon) {
      this.stub(Faker.PhoneNumber, 'subscriberNumber').withArgs(8).returns('12345678');
      expect(Faker.PhoneNumber.extension(8)).to.eql('12345678');
    }));
  });
});
