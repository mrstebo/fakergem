'use strict';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonTest from 'sinon-test';
import Faker from '../../src/index';
import data from '../../src/data/companies-house.json';
const test = sinonTest(sinon, {useFakeTimers: false});

describe('CompaniesHouse', () => {
  describe('#companyNumber', () => {
    it('should return a company number', test(function(this: typeof sinon) {
      this.stub(Faker.Random, 'element').withArgs(data['companyNumbers']).returns('01234567');
      expect(Faker.CompaniesHouse.companyNumber()).to.eql('01234567');
    }));
  });
});
