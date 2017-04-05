import {expect} from 'chai';
import * as DateFaker from '../../lib/faker/date';

describe('#Date', () => {
  describe('#between', () => {
    it('should return a Date', () => {
      expect(DateFaker.between(new Date(), new Date())).to.be.a('Date');
    });

    it('should handle string dates', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 0, 10);
      expect(DateFaker.between('2017-01-01', '2017-01-10')).to.be.within(from, to);
    });
  });

  describe('#betweenExcept', () => {
    it('should return a Date', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 0, 10);
      const except = new Date(2017, 0, 5);
      expect(DateFaker.betweenExcept(from, to, except)).to.be.a('Date');
    });

    it('should handle string dates', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 0, 10);
      expect(DateFaker.betweenExcept('2017-01-01', '2017-01-10', '2017-01-04')).to.be.within(from, to);
    });
  });

  describe('#forward', () => {
    it('should return a Date', () => {
      expect(DateFaker.forward(10)).to.be.a('Date');
    });
  });

  describe('#backward', () => {
    it('should return a Date', () => {
      expect(DateFaker.backward(10)).to.be.a('Date');
    });
  });

  describe('#birthday', () => {
    it('should return a Date', () => {
      expect(DateFaker.birthday(18, 65)).to.be.a('Date');
    });
  });
});
