'use strict';
const expect = require('chai').expect;
const Food = require('../../src/faker/food');
const data = require('../../data/food.json');

describe('Food', () => {
  describe('#ingredient', () => {
    it('should return a ingredient', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Food.ingredient()).to.be.oneOf(data['ingredients']);
      });
    });
  });

  describe('#spice', () => {
    it('should return a spice', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Food.spice()).to.be.oneOf(data['spices']);
      });
    });
  });

  describe('#measurement', () => {
    it('should return a measurement', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Food.measurement()).to.be.oneOf(data['measurements']);
      });
    });
  });
});
