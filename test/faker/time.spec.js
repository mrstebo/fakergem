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

    it('should return date with format', () => {
      const date = new Date(2017, 3, 4);
      expect(Time.between(date, date, Time.ALL, 'dd')).to.equal('04');
      expect(Time.between(date, date, Time.ALL, 'd')).to.equal('4');
      expect(Time.between(date, date, Time.ALL, 'DD')).to.equal('Tuesday');
      expect(Time.between(date, date, Time.ALL, 'D')).to.equal('Tue');
      expect(Time.between(date, date, Time.ALL, 'MMMM')).to.equal('April');
      expect(Time.between(date, date, Time.ALL, 'MMM')).to.equal('Apr');
      expect(Time.between(date, date, Time.ALL, 'MM')).to.equal('04');
      expect(Time.between(date, date, Time.ALL, 'M')).to.equal('4');
      expect(Time.between(date, date, Time.ALL, 'yyyy')).to.equal('2017');
      expect(Time.between(date, date, Time.ALL, 'YYYY')).to.equal('2017');
      expect(Time.between(date, date, Time.ALL, 'yy')).to.equal('17');
      expect(Time.between(date, date, Time.ALL, 'YY')).to.equal('17');
    });

    it('should return time with format', () => {
      const date = new Date();
      expect(Time.between(date, date, Time.ALL, 'HH')).to.match(/^\d{2}$/);
      expect(Time.between(date, date, Time.ALL, 'H')).to.match(/^\d+$/);
      expect(Time.between(date, date, Time.ALL, 'mm')).to.match(/^\d{2}$/);
      expect(Time.between(date, date, Time.ALL, 'm')).to.match(/^\d+$/);
      expect(Time.between(date, date, Time.ALL, 'ss')).to.match(/^\d{2}$/);
      expect(Time.between(date, date, Time.ALL, 's')).to.match(/^\d+$/);
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

    it('should return date with format', () => {
      expect(Time.forward(10, Time.ALL, 'dd')).to.match(/^\d{2}$/);
      expect(Time.forward(10, Time.ALL, 'd')).to.match(/^\d+$/);
      expect(Time.forward(10, Time.ALL, 'DD')).to.match(/^\w+$/);
      expect(Time.forward(10, Time.ALL, 'D')).to.match(/^\w{3}$/);
      expect(Time.forward(10, Time.ALL, 'MMMM')).to.match(/^\w+$/);
      expect(Time.forward(10, Time.ALL, 'MMM')).to.match(/^\w{3}$/);
      expect(Time.forward(10, Time.ALL, 'MM')).to.match(/^\d{2}$/);
      expect(Time.forward(10, Time.ALL, 'M')).to.match(/^\d+$/);
      expect(Time.forward(10, Time.ALL, 'yyyy')).to.match(/^\d{4}$/);
      expect(Time.forward(10, Time.ALL, 'YYYY')).to.match(/^\d{4}$/);
      expect(Time.forward(10, Time.ALL, 'yy')).to.match(/^\d{2}$/);
      expect(Time.forward(10, Time.ALL, 'YY')).to.match(/^\d{2}$/);
    });

    it('should return time with format', () => {
      const date = new Date();
      expect(Time.forward(10, Time.ALL, 'HH')).to.match(/^\d{2}$/);
      expect(Time.forward(10, Time.ALL, 'H')).to.match(/^\d+$/);
      expect(Time.forward(10, Time.ALL, 'mm')).to.match(/^\d{2}$/);
      expect(Time.forward(10, Time.ALL, 'm')).to.match(/^\d+$/);
      expect(Time.forward(10, Time.ALL, 'ss')).to.match(/^\d{2}$/);
      expect(Time.forward(10, Time.ALL, 's')).to.match(/^\d+$/);
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

    it('should return date with format', () => {
      expect(Time.backward(10, Time.ALL, 'dd')).to.match(/^\d{2}$/);
      expect(Time.backward(10, Time.ALL, 'd')).to.match(/^\d+$/);
      expect(Time.backward(10, Time.ALL, 'DD')).to.match(/^\w+$/);
      expect(Time.backward(10, Time.ALL, 'D')).to.match(/^\w{3}$/);
      expect(Time.backward(10, Time.ALL, 'MMMM')).to.match(/^\w+$/);
      expect(Time.backward(10, Time.ALL, 'MMM')).to.match(/^\w{3}$/);
      expect(Time.backward(10, Time.ALL, 'MM')).to.match(/^\d{2}$/);
      expect(Time.backward(10, Time.ALL, 'M')).to.match(/^\d+$/);
      expect(Time.backward(10, Time.ALL, 'yyyy')).to.match(/^\d{4}$/);
      expect(Time.backward(10, Time.ALL, 'YYYY')).to.match(/^\d{4}$/);
      expect(Time.backward(10, Time.ALL, 'yy')).to.match(/^\d{2}$/);
      expect(Time.backward(10, Time.ALL, 'YY')).to.match(/^\d{2}$/);
    });

    it('should return time with format', () => {
      const date = new Date();
      expect(Time.backward(10, Time.ALL, 'HH')).to.match(/^\d{2}$/);
      expect(Time.backward(10, Time.ALL, 'H')).to.match(/^\d+$/);
      expect(Time.backward(10, Time.ALL, 'mm')).to.match(/^\d{2}$/);
      expect(Time.backward(10, Time.ALL, 'm')).to.match(/^\d+$/);
      expect(Time.backward(10, Time.ALL, 'ss')).to.match(/^\d{2}$/);
      expect(Time.backward(10, Time.ALL, 's')).to.match(/^\d+$/);
    });
  });
});
