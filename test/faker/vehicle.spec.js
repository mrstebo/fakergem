'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/vehicle.json');

describe('Vehicle', () => {
  describe('#vin', () => {
    it('should return a vin', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Vehicle.vin()).to.match(/^[0-9A-HJ-NPRS-Z]{16}$/);
      });
    });
  });

  describe('#manufacture', () => {
    it('should return a manufacture', () => {
      const manufactures = data['manufactures'].map(x => x[0]);
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Vehicle.manufacture()).to.be.oneOf(manufactures);
      });
    });
  });
});
