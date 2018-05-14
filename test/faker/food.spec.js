'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/food.json');

describe('Food', () => {
  describe('#ingredient', () => {
    it('should return a ingredient', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Food.ingredient()).to.be.oneOf(data['ingredients']);
      });
    });
  });

  describe('#spice', () => {
    it('should return a spice', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Food.spice()).to.be.oneOf(data['spices']);
      });
    });
  });

  describe('#measurement', () => {
    it('should return a measurement', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Food.measurement()).to.be.oneOf(data['measurements']);
      });
    });
  });
});
