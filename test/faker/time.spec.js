'use strict';
const expect = require('chai').expect;
const Time = require('../../src/faker/time');

describe('Time', () => {
  describe('#between', () => {
    it('should return a Date', () => {
      expect(Time.between(new Date(), new Date())).to.be.a('Date');
    });

    it('should return a date between two dates', () => {
      const from = new Date(2017, 9, 1);
      const to = new Date(2017, 9, 31);
      expect(Time.between(from, to)).to.be.within(from, to);
    });

    it('should return only date if Time.BETWEEN is the period', () => {
      const from = new Date(2017, 9, 1);
      const to = new Date(2017, 9, 31);
      const date = Time.between(from, to, Time.BETWEEN);
      expect(date.getHours()).to.equal(0);
      expect(date.getMinutes()).to.equal(0);
      expect(date.getSeconds()).to.equal(0);
    });

    it('should return a time between a specified period', () => {
      expect(Time.between(new Date(), new Date(), Time.ALL).getHours()).to.be.within(0, 23);
      expect(Time.between(new Date(), new Date(), Time.DAY).getHours()).to.be.within(9, 17);
      expect(Time.between(new Date(), new Date(), Time.NIGHT).getHours()).to.be.within(18, 23);
      expect(Time.between(new Date(), new Date(), Time.MORNING).getHours()).to.be.within(6, 11);
      expect(Time.between(new Date(), new Date(), Time.AFTERNOON).getHours()).to.be.within(12, 17);
      expect(Time.between(new Date(), new Date(), Time.EVENING).getHours()).to.be.within(17, 21);
      expect(Time.between(new Date(), new Date(), Time.MIDNIGHT).getHours()).to.be.within(0, 4);
      expect(Time.between(new Date(), new Date(), Time.BETWEEN).getHours()).to.be.within(0, 23);
    });

    it('should return a formatted date', () => {
      const date = new Date();
      expect(Time.between(date, date, Time.ALL, 'yyyy-MM-dd HH:mm:ss')).to.match(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/);
    });
  });

  describe('#forward', () => {
    it('should return a Date', () => {
      expect(Time.forward()).to.be.a('Date');
    });

    it('should return a time in the future', () => {
      expect(Time.forward()).to.be.at.least(new Date());
    });

    it('should return a time no greater than the specified number of days', () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      [...Array(100).keys()].forEach(_ => {
        expect(Time.forward(10)).to.be.above(today);
      });
    });

    it('should return a time between a specified period', () => {
      expect(Time.forward(10, Time.ALL).getHours()).to.be.within(0, 23);
      expect(Time.forward(10, Time.DAY).getHours()).to.be.within(9, 17);
      expect(Time.forward(10, Time.NIGHT).getHours()).to.be.within(18, 23);
      expect(Time.forward(10, Time.MORNING).getHours()).to.be.within(6, 11);
      expect(Time.forward(10, Time.AFTERNOON).getHours()).to.be.within(12, 17);
      expect(Time.forward(10, Time.EVENING).getHours()).to.be.within(17, 21);
      expect(Time.forward(10, Time.MIDNIGHT).getHours()).to.be.within(0, 4);
    });

    it('should throw if BETWEEN period specified', () => {
      expect(() => Time.forward(10, Time.BETWEEN)).to.throw('invalid period');
    });

    it('should return a formatted date', () => {
      const date = new Date();
      expect(Time.forward(10, Time.ALL, 'yyyy-MM-dd HH:mm:ss')).to.match(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/);
    });
  });

  describe('#backward', () => {
    it('should return a Date', () => {
      expect(Time.backward()).to.be.a('Date');
    });

    it('should return a time in the past', () => {
      expect(Time.backward()).to.be.at.most(new Date());
    });

    it('should return a time no less than the specified number of days', () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      [...Array(100).keys()].forEach(_ => {
        expect(Time.backward(10)).to.be.below(today);
      });
    });

    it('should return a time between a specified period', () => {
      expect(Time.backward(10, Time.ALL).getHours()).to.be.within(0, 23);
      expect(Time.backward(10, Time.DAY).getHours()).to.be.within(9, 17);
      expect(Time.backward(10, Time.NIGHT).getHours()).to.be.within(18, 23);
      expect(Time.backward(10, Time.MORNING).getHours()).to.be.within(6, 11);
      expect(Time.backward(10, Time.AFTERNOON).getHours()).to.be.within(12, 17);
      expect(Time.backward(10, Time.EVENING).getHours()).to.be.within(17, 21);
      expect(Time.backward(10, Time.MIDNIGHT).getHours()).to.be.within(0, 4);
    });

    it('should throw if BETWEEN period specified', () => {
      expect(() => Time.backward(10, Time.BETWEEN)).to.throw('invalid period');
    });

    it('should return a formatted date', () => {
      const date = new Date();
      expect(Time.backward(10, Time.ALL, 'yyyy-MM-dd HH:mm:ss')).to.match(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/);
    });
  });
});
