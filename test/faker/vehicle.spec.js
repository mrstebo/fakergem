'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');
const data = require('../../data/vehicle.json');

describe('Vehicle', () => {
  describe('#vin', () => {
    it('should return a vin', sinonTest(function() {
      const vinDetails = data['manufactures'].map(x => ({wmi: x[1], wmiExt: x[2]}));
      const vinCharacters = '0123456789ABCDEFGHJKLMNPRSTUVWXYZ';
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(vinDetails).returns({wmi: '1A9', wmiExt: '396'});
      randomStub.withArgs(vinCharacters).returns('0');
      expect(Faker.Vehicle.vin()).to.eql('1A939');
    }));
  });

  describe('#manufacture', () => {
    it('should return a manufacture', sinonTest(function() {
      const manufactures = data['manufactures'].map(x => x[0]);
      this.stub(Faker.Random, 'element').withArgs(manufactures).returns('manufacture');
      expect(Faker.Vehicle.manufacture()).to.eql('manufacture');
    }));
  });
});
