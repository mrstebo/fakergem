'use strict';
const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/index');

chai.use(require('chai-datetime'));

function daysFromNow(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  d.setHours(0, 0, 0, 0);
  return d;
}

describe('#Date', () => {
  describe('#between', () => {
    it('should return a Date', () => {
      const date = new Date();
      expect(Faker.Date.between(date, date)).to.be.a('Date');
    });

    it('should handle string dates', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 0, 10);
      expect(Faker.Date.between('2017-01-01', '2017-01-10')).to.be.withinDate(from, to);
    });

    it('should return a date between two dates', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 0, 10);
      expect(Faker.Date.between(from, to)).to.be.withinDate(from, to);
    });
  });

  describe('#betweenExcept', () => {
    it('should return a Date', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 0, 2);
      const except = new Date(2017, 0, 2);
      expect(Faker.Date.betweenExcept(from, to, except)).to.be.a('Date');
    });

    it('should handle string dates', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 0, 2);
      const except = new Date(2017, 0, 2);
      expect( Faker.Date.betweenExcept('2017-01-01', '2017-01-02', '2017-01-02')).to.eql(from);
    });

    it('should return a date in between two dates except for the excepted date', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 1, 5);
      const except = new Date(2017, 0, 8);
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Date.betweenExcept(from, to, except)).to.not.eql(except);
      });
    });
  });

  describe('#forward', () => {
    it('should return a Date', () => {
      expect(Faker.Date.forward()).to.be.a('Date');
    });

    it('should return a date in the future', sinonTest(function() {
      const from = daysFromNow(1);
      const to = daysFromNow(365);
      const expected = daysFromNow(123);
      this.stub(Faker.Date, 'between').withArgs(from, to).returns(expected);
      expect(Faker.Date.forward()).to.eql(expected);
    }));

    it('should return a date no greater than the specified number of days', () => {
      const max = daysFromNow(5);
      expect(Faker.Date.forward(5)).to.be.withinDate(new Date(), max);
    });
  });

  describe('#backward', () => {
    it('should return a Date', () => {
      expect(Faker.Date.backward()).to.be.a('Date');
    });

    it('should return a date in the past', sinonTest(function() {
      const from = daysFromNow(-365);
      const to = daysFromNow(-1);
      const expected = daysFromNow(123);
      this.stub(Faker.Date, 'between').withArgs(from, to).returns(expected);
      expect(Faker.Date.backward()).to.eql(expected);
    }));

    it('should return a date no less than the specified number of days', () => {
      const min = daysFromNow(-5);
      expect(Faker.Date.backward(5)).to.be.withinDate(min, new Date());
    });
  });

  describe('#birthday', () => {
    it('should return a Date', () => {
      expect(Faker.Date.birthday()).to.be.a('Date');
    });

    it('should return a birth date between two ages', () => {
      const now = new Date();
      const from = new Date(now.getFullYear() - 25, now.getMonth(), now.getDate());
      const to = new Date(now.getFullYear() - 18, now.getMonth(), now.getDate());
      expect(Faker.Date.birthday(18, 25)).to.be.withinDate(from, to);
    });
  });
});
