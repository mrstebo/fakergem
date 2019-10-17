'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import SinonTest from 'sinon-test';
import Faker from '../../src/index';
const sinonTest = SinonTest.configureTest(sinon, {useFakeTimers: false});
const data = require('../../data/vehicle.json');

describe('Vehicle', () => {
  describe('#vin', () => {
    it('should return a VIN number', sinonTest(function(this: typeof sinon) {
      const vinDetails = data['manufactures'].map(x => ({wmi: x[1], wmiExt: x[2]}));
      const vinCharacters = '0123456789ABCDEFGHJKLMNPRSTUVWXYZ';
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(vinDetails).returns({wmi: '1A9', wmiExt: '396'});
      randomStub.withArgs(vinCharacters).returns('0');
      expect(Faker.Vehicle.vin()).to.eql('1A939');
    }));

    it('should handle VIN details without a wmiExt', sinonTest(function(this: typeof sinon) {
      const vinDetails = data['manufactures'].map(x => ({wmi: x[1], wmiExt: x[2]}));
      const vinCharacters = '0123456789ABCDEFGHJKLMNPRSTUVWXYZ';
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(vinDetails).returns({wmi: '1A9'});
      randomStub.withArgs(vinCharacters).returns('0');
      expect(Faker.Vehicle.vin()).to.eql('1A9');
    }));
  });

  describe('#manufacture', () => {
    it('should return a manufacture', sinonTest(function(this: typeof sinon) {
      const manufactures = data['manufactures'].map(x => x[0]);
      this.stub(Faker.Random, 'element').withArgs(manufactures).returns('manufacture');
      expect(Faker.Vehicle.manufacture()).to.eql('manufacture');
    }));
  });
});
