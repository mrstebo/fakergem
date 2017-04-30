'use strict';
const expect = require('chai').expect;
const University = require('../../src/faker/university');
const data = require('../../data/university.json');

describe('University', () => {
  describe('#name', () => {
    it('should return a name', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(University.name()).to.be.oneOf(data['names']);
      });
    });
  });
});
