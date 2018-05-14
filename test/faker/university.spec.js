'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/university.json');

describe('University', () => {
  describe('#name', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.University.name()).to.be.oneOf(data['names']);
      });
    });
  });
});
