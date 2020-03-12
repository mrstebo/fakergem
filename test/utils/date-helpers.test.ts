'use strict';
import { expect } from 'chai';
import { format } from '../../src/utils/date-helpers';

describe('Date Helpers', () => {
  describe('#format', () => {
    it('should replace "dd" with padded day', () => {
      const date = new Date(2017, 0, 1);
      expect(format(date, 'dd')).to.equal('01');
    });

    it('should replace "d" with day', () => {
      const date = new Date(2017, 0, 1);
      expect(format(date, 'd')).to.equal('1');
    });

    it('should replace "DD" with day name', () => {
      expect(format(new Date(2017, 0, 1), 'DD')).to.equal('Sunday');
      expect(format(new Date(2017, 0, 2), 'DD')).to.equal('Monday');
      expect(format(new Date(2017, 0, 3), 'DD')).to.equal('Tuesday');
      expect(format(new Date(2017, 0, 4), 'DD')).to.equal('Wednesday');
      expect(format(new Date(2017, 0, 5), 'DD')).to.equal('Thursday');
      expect(format(new Date(2017, 0, 6), 'DD')).to.equal('Friday');
      expect(format(new Date(2017, 0, 7), 'DD')).to.equal('Saturday');
    });

    it('should replace "D" with 3 character day name', () => {
      expect(format(new Date(2017, 0, 1), 'D')).to.equal('Sun');
      expect(format(new Date(2017, 0, 2), 'D')).to.equal('Mon');
      expect(format(new Date(2017, 0, 3), 'D')).to.equal('Tue');
      expect(format(new Date(2017, 0, 4), 'D')).to.equal('Wed');
      expect(format(new Date(2017, 0, 5), 'D')).to.equal('Thu');
      expect(format(new Date(2017, 0, 6), 'D')).to.equal('Fri');
      expect(format(new Date(2017, 0, 7), 'D')).to.equal('Sat');
    });

    it('should not replace "De" with a 3 character day name', () => {
      const date = new Date(2017, 0, 1);
      expect(format(date, 'De')).to.equal('De');
    });

    it('should replace "MMMM" with full month name', () => {
      expect(format(new Date(2017, 0, 1), 'MMMM')).to.equal('January');
      expect(format(new Date(2017, 1, 1), 'MMMM')).to.equal('February');
      expect(format(new Date(2017, 2, 1), 'MMMM')).to.equal('March');
      expect(format(new Date(2017, 3, 1), 'MMMM')).to.equal('April');
      expect(format(new Date(2017, 4, 1), 'MMMM')).to.equal('May');
      expect(format(new Date(2017, 5, 1), 'MMMM')).to.equal('June');
      expect(format(new Date(2017, 6, 1), 'MMMM')).to.equal('July');
      expect(format(new Date(2017, 7, 1), 'MMMM')).to.equal('August');
      expect(format(new Date(2017, 8, 1), 'MMMM')).to.equal('September');
      expect(format(new Date(2017, 9, 1), 'MMMM')).to.equal('October');
      expect(format(new Date(2017, 10, 1), 'MMMM')).to.equal('November');
      expect(format(new Date(2017, 11, 1), 'MMMM')).to.equal('December');
    });

    it('should replace "MMM" with 3 character month name', () => {
      expect(format(new Date(2017, 0, 1), 'MMM')).to.equal('Jan');
      expect(format(new Date(2017, 1, 1), 'MMM')).to.equal('Feb');
      expect(format(new Date(2017, 2, 1), 'MMM')).to.equal('Mar');
      expect(format(new Date(2017, 3, 1), 'MMM')).to.equal('Apr');
      expect(format(new Date(2017, 4, 1), 'MMM')).to.equal('May');
      expect(format(new Date(2017, 5, 1), 'MMM')).to.equal('Jun');
      expect(format(new Date(2017, 6, 1), 'MMM')).to.equal('Jul');
      expect(format(new Date(2017, 7, 1), 'MMM')).to.equal('Aug');
      expect(format(new Date(2017, 8, 1), 'MMM')).to.equal('Sep');
      expect(format(new Date(2017, 9, 1), 'MMM')).to.equal('Oct');
      expect(format(new Date(2017, 10, 1), 'MMM')).to.equal('Nov');
      expect(format(new Date(2017, 11, 1), 'MMM')).to.equal('Dec');
    });

    it('should replace "MM" with padded month', () => {
      const date = new Date(2017, 0, 1);
      expect(format(date, 'MM')).to.equal('01');
    });

    it('should replace "M" with month', () => {
      const date = new Date(2017, 0, 1);
      expect(format(date, 'M')).to.equal('1');
    });

    it('should not replace "Ma" with month', () => {
      const date = new Date(2017, 0, 1);
      expect(format(date, 'Ma')).to.equal('Ma');
    });

    it('should not replace "Mo" with month', () => {
      const date = new Date(2017, 0, 1);
      expect(format(date, 'Mo')).to.equal('Mo');
    });

    it('should replace "yyyy" with year', () => {
      const date = new Date(2017, 0, 1);
      expect(format(date, 'yyyy')).to.equal('2017');
    });

    it('should replace "YYYY" with year', () => {
      const date = new Date(2017, 0, 1);
      expect(format(date, 'YYYY')).to.equal('2017');
    });

    it('should replace "yy" with 2 character year', () => {
      const date = new Date(2017, 0, 1);
      expect(format(date, 'yy')).to.equal('17');
    });

    it('should replace "YY" with 2 character year', () => {
      const date = new Date(2017, 0, 1);
      expect(format(date, 'YY')).to.equal('17');
    });

    it('should replace "HH" with padded hours', () => {
      const date = new Date(2017, 0, 1, 0, 1, 2);
      expect(format(date, 'HH')).to.equal('00');
    });

    it('should replace "H" with hours', () => {
      const date = new Date(2017, 0, 1, 0, 1, 2);
      expect(format(date, 'H')).to.equal('0');
    });

    it('should replace "mm" with padded minutes', () => {
      const date = new Date(2017, 0, 1, 0, 1, 2);
      expect(format(date, 'mm')).to.equal('01');
    });

    it('should replace "m" with minutes', () => {
      const date = new Date(2017, 0, 1, 0, 1, 2);
      expect(format(date, 'm')).to.equal('1');
    });

    it('should replace "ss" with padded seconds', () => {
      const date = new Date(2017, 0, 1, 0, 1, 2);
      expect(format(date, 'ss')).to.equal('02');
    });

    it('should replace "s" with seconds', () => {
      const date = new Date(2017, 0, 1, 0, 1, 2);
      expect(format(date, 's')).to.equal('2');
    });

    it('should handle complex format', () => {
      const date = new Date(2017, 0, 1, 0, 1, 2);
      expect(format(date, 'yyyy-MM-dd HH:mm:ss')).to.equal('2017-01-01 00:01:02');
      expect(format(date, 'yy-M-d')).to.equal('17-1-1');
      expect(format(date, 'HH:mm:ss')).to.equal('00:01:02');
      expect(format(date, 'H:m:s')).to.equal('0:1:2');
    });
  });
});
