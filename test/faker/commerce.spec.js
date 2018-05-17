'use strict';
const expect = require('chai').expect;
const orList = require('../support/regexp').orList;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');
const data = require('../../data/commerce.json');
const colorData = require('../../data/color.json');

describe('Commerce', () => {
  describe('#color', () => {
    it('should return a color', sinonTest(function() {
      this.stub(Faker.Color, 'colorName').returns('color');
      expect(Faker.Commerce.color()).to.eql('color');
    }));
  });

  describe('#department', () => {
    it('should return a department', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(1, 3).returns(3);
      this.stub(Faker.Random, 'element').withArgs(data['departments'])
        .onFirstCall().returns('d1')
        .onSecondCall().returns('d2')
        .onThirdCall().returns('d3');
      expect(Faker.Commerce.department()).to.eql('d1, d2 & d3');
    }));

    it('should contain no more than the max number of departments if specified', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(1, 5).returns(5);
      this.stub(Faker.Random, 'element').withArgs(data['departments'])
        .onCall(0).returns('d1')
        .onCall(1).returns('d2')
        .onCall(2).returns('d3')
        .onCall(3).returns('d4')
        .onCall(4).returns('d5');
      expect(Faker.Commerce.department(5)).to.eql('d1, d2, d3, d4 & d5');
    }));

    it('should return fixed number of departments if specified', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['departments'])
        .onFirstCall().returns('d1')
        .onSecondCall().returns('d2')
        .onThirdCall().returns('d3');
      expect(Faker.Commerce.department(3, true)).to.eql('d1, d2 & d3');
    }));
  });

  describe('#productName', () => {
    it('should return a product name', sinonTest(function() {
      const fakerStub = this.stub(Faker.Random, 'element');
      fakerStub.withArgs(data['productNames']['adjective']).returns('adjective');
      fakerStub.withArgs(data['productNames']['material']).returns('material');
      fakerStub.withArgs(data['productNames']['product']).returns('product');
      expect(Faker.Commerce.productName()).to.eql('adjective material product');
    }));
  });

  describe('#price', () => {
    it('should return a price', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(0.00, 100.00).returns(1.99);
      expect(Faker.Commerce.price()).to.eql('1.99');
    }));

    it('should return a price within the specified range', () => {
      const range = {min: 20.0, max: 40.0};
      [...Array(100).keys()].forEach(_ => {
        const price = parseFloat(Faker.Commerce.price(range));
        expect(price).to.be.within(range.min, range.max);
      });
    });
  });

  describe('#promotionCode', () => {
    it('should return a promotion code', sinonTest(function() {
      const fakerStub = this.stub(Faker.Random, 'element');
      fakerStub.withArgs(data['promotionCodes']['adjective']).returns('adjective');
      fakerStub.withArgs(data['promotionCodes']['noun']).returns('noun');
      this.stub(Faker.Number, 'number').withArgs(6).returns(123456);
      expect(Faker.Commerce.promotionCode()).to.eql('adjectivenoun123456');
    }));

    it('should end with number with specified number of digits', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Commerce.promotionCode(24)).to.match(/.*[0-9]{24}$/);
      });
    });
  });
});
