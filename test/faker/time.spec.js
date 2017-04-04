import {expect} from 'chai';
import * as Time from '../../lib/faker/time';

describe('Time', () => {
  describe('#between', () => {
    it('should return a Date', () => {
      expect(Time.between(new Date(), new Date())).to.be.a('Date');
    });

    it('should return a date between two dates', () => {
      const from = new Date(2017, 9, 1);
      const to = new Date(2017, 9, 31);
      expect(Time.between(new Date(from), new Date(to))).to.be.within(from, to);
    });

    it('should return a formatted date', () => {
      const date = new Date();
      expect(Time.between(date, date, Time.ALL, 'yyyy-MM-dd HH:mm:ss')).to.match(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/);
    });
  });

  describe('#forward', () => {
    it('should return a Date', () => {
      expect(Time.forward(10)).to.be.a('Date');
    });

    it('should return a time in the future', () => {
      expect(Time.forward(10)).to.be.at.least(new Date());
    });

    it('should return a time no greater than the specified number of days', () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      [...Array(100).keys()].forEach(_ => {
        expect(Time.forward(10)).to.be.above(today);
      });
    });

    it('should return a formatted date', () => {
      const date = new Date();
      expect(Time.forward(10, Time.ALL, 'yyyy-MM-dd HH:mm:ss')).to.match(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/);
    });
  });

  describe('#backward', () => {
    it('should return a Date', () => {
      expect(Time.backward(10)).to.be.a('Date');
    });

    it('should return a time in the past', () => {
      expect(Time.backward(10)).to.be.at.most(new Date());
    });

    it('should return a time no less than the specified number of days', () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      [...Array(100).keys()].forEach(_ => {
        expect(Time.backward(10)).to.be.below(today);
      });
    });

    it('should return a formatted date', () => {
      const date = new Date();
      expect(Time.backward(10, Time.ALL, 'yyyy-MM-dd HH:mm:ss')).to.match(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/);
    });
  });
});
