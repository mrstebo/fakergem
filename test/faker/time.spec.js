import {expect} from 'chai';
import * as Time from '../../lib/faker/time';

describe('Time', () => {
  describe('#between', () => {
    it('should return a Date object', () => {
      expect(Time.between(new Date(), new Date())).to.be.a('Date');
    });

    it('should return a date between two dates', () => {
      const from = new Date(2017, 9, 1);
      const to = new Date(2017, 9, 31);
      expect(Time.between(new Date(from), new Date(to))).to.be.within(from, to);
    });
  });

  describe('#forward', () => {
    it('should return a Date object', () => {
      expect(Time.forward(10)).to.be.a('Date');
    });

    it('should return a time in the future', () => {
      expect(Time.forward(10)).to.be.above(new Date());
    });

    it('should return a time no greater than the specified number of days', () => {
      [...Array(100).keys()].forEach(_ => {
        const min = new Date();
        min.setDate(min.getDate() + 1);
        const max = new Date();
        max.setDate(max.getDate() + 10);
        expect(Time.forward(10)).to.be.within(min, max);
      });
    });
  });

  describe('#backward', () => {
    it('should return a Date object', () => {
      expect(Time.backward(10)).to.be.a('Date');
    });

    it('should return a time in the past', () => {
      expect(Time.backward(10)).to.be.below(new Date());
    });

    it('should return a time no less than the specified number of days', () => {
      [...Array(100).keys()].forEach(_ => {
        const min = new Date();
        min.setDate(min.getDate() - 10);
        const max = new Date();
        max.setDate(max.getDate() - 1);
        expect(Time.backward(10)).to.be.within(min, max);
      });
    });
  });
});
