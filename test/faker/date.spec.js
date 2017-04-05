import {expect} from 'chai';
import * as DateFaker from '../../lib/faker/date';

describe('#Date', () => {
  describe('#between', () => {
    it('should return a Date', () => {
      expect(DateFaker.between(new Date(), new Date())).to.be.a('Date');
    });
  });

  describe('#betweenExcept', () => {
    it('should return a Date', () => {
      expect(DateFaker.between(new Date(), new Date(), new Date())).to.be.a('Date');
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
