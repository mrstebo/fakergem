'use strict';
const expect = require('chai').expect;
const DateHelper = require('../../src/utils/date-helper');

describe('DateHelper', () => {
  describe('#format', () => {
    it('should replace "dd" with padded day', () => {
      const date = new Date(2017, 0, 1);
      expect(DateHelper.format(date, 'dd')).to.equal('01');
    });

    it('should replace "d" with day', () => {
      const date = new Date(2017, 0, 1);
      expect(DateHelper.format(date, 'd')).to.equal('1');
    });

    it('should replace "DD" with day name', () => {
      expect(DateHelper.format(new Date(2017, 0, 1), 'DD')).to.equal('Sunday');
      expect(DateHelper.format(new Date(2017, 0, 2), 'DD')).to.equal('Monday');
      expect(DateHelper.format(new Date(2017, 0, 3), 'DD')).to.equal('Tuesday');
      expect(DateHelper.format(new Date(2017, 0, 4), 'DD')).to.equal('Wednesday');
      expect(DateHelper.format(new Date(2017, 0, 5), 'DD')).to.equal('Thursday');
      expect(DateHelper.format(new Date(2017, 0, 6), 'DD')).to.equal('Friday');
      expect(DateHelper.format(new Date(2017, 0, 7), 'DD')).to.equal('Saturday');
    });

    it('should replace "D" with 3 character day name', () => {
      expect(DateHelper.format(new Date(2017, 0, 1), 'D')).to.equal('Sun');
      expect(DateHelper.format(new Date(2017, 0, 2), 'D')).to.equal('Mon');
      expect(DateHelper.format(new Date(2017, 0, 3), 'D')).to.equal('Tue');
      expect(DateHelper.format(new Date(2017, 0, 4), 'D')).to.equal('Wed');
      expect(DateHelper.format(new Date(2017, 0, 5), 'D')).to.equal('Thu');
      expect(DateHelper.format(new Date(2017, 0, 6), 'D')).to.equal('Fri');
      expect(DateHelper.format(new Date(2017, 0, 7), 'D')).to.equal('Sat');
    });

    it('should replace "MMMM" with full month name', () => {
      expect(DateHelper.format(new Date(2017, 0, 1), 'MMMM')).to.equal('January');
      expect(DateHelper.format(new Date(2017, 1, 1), 'MMMM')).to.equal('February');
      expect(DateHelper.format(new Date(2017, 2, 1), 'MMMM')).to.equal('March');
      expect(DateHelper.format(new Date(2017, 3, 1), 'MMMM')).to.equal('April');
      expect(DateHelper.format(new Date(2017, 4, 1), 'MMMM')).to.equal('May');
      expect(DateHelper.format(new Date(2017, 5, 1), 'MMMM')).to.equal('June');
      expect(DateHelper.format(new Date(2017, 6, 1), 'MMMM')).to.equal('July');
      expect(DateHelper.format(new Date(2017, 7, 1), 'MMMM')).to.equal('August');
      expect(DateHelper.format(new Date(2017, 8, 1), 'MMMM')).to.equal('September');
      expect(DateHelper.format(new Date(2017, 9, 1), 'MMMM')).to.equal('October');
      expect(DateHelper.format(new Date(2017, 10, 1), 'MMMM')).to.equal('November');
      expect(DateHelper.format(new Date(2017, 11, 1), 'MMMM')).to.equal('December');
    });

    it('should replace "MMM" with 3 character month name', () => {
      expect(DateHelper.format(new Date(2017, 0, 1), 'MMM')).to.equal('Jan');
      expect(DateHelper.format(new Date(2017, 1, 1), 'MMM')).to.equal('Feb');
      expect(DateHelper.format(new Date(2017, 2, 1), 'MMM')).to.equal('Mar');
      expect(DateHelper.format(new Date(2017, 3, 1), 'MMM')).to.equal('Apr');
      expect(DateHelper.format(new Date(2017, 4, 1), 'MMM')).to.equal('May');
      expect(DateHelper.format(new Date(2017, 5, 1), 'MMM')).to.equal('Jun');
      expect(DateHelper.format(new Date(2017, 6, 1), 'MMM')).to.equal('Jul');
      expect(DateHelper.format(new Date(2017, 7, 1), 'MMM')).to.equal('Aug');
      expect(DateHelper.format(new Date(2017, 8, 1), 'MMM')).to.equal('Sep');
      expect(DateHelper.format(new Date(2017, 9, 1), 'MMM')).to.equal('Oct');
      expect(DateHelper.format(new Date(2017, 10, 1), 'MMM')).to.equal('Nov');
      expect(DateHelper.format(new Date(2017, 11, 1), 'MMM')).to.equal('Dec');
    });

    it('should replace "MM" with padded month', () => {
      const date = new Date(2017, 0, 1);
      expect(DateHelper.format(date, 'MM')).to.equal('01');
    });

    it('should replace "M" with month', () => {
      const date = new Date(2017, 0, 1);
      expect(DateHelper.format(date, 'M')).to.equal('1');
    });

    it('should replace "yyyy" with year', () => {
      const date = new Date(2017, 0, 1);
      expect(DateHelper.format(date, 'yyyy')).to.equal('2017');
    });

    it('should replace "YYYY" with year', () => {
      const date = new Date(2017, 0, 1);
      expect(DateHelper.format(date, 'YYYY')).to.equal('2017');
    });

    it('should replace "yy" with 2 character year', () => {
      const date = new Date(2017, 0, 1);
      expect(DateHelper.format(date, 'yy')).to.equal('17');
    });

    it('should replace "YY" with 2 character year', () => {
      const date = new Date(2017, 0, 1);
      expect(DateHelper.format(date, 'YY')).to.equal('17');
    });

    it('should replace "HH" with padded hours', () => {
      const date = new Date(2017, 0, 1, 0, 1, 2);
      expect(DateHelper.format(date, 'HH')).to.equal('00');
    });

    it('should replace "H" with hours', () => {
      const date = new Date(2017, 0, 1, 0, 1, 2);
      expect(DateHelper.format(date, 'H')).to.equal('0');
    });

    it('should replace "mm" with padded minutes', () => {
      const date = new Date(2017, 0, 1, 0, 1, 2);
      expect(DateHelper.format(date, 'mm')).to.equal('01');
    });

    it('should replace "m" with minutes', () => {
      const date = new Date(2017, 0, 1, 0, 1, 2);
      expect(DateHelper.format(date, 'm')).to.equal('1');
    });

    it('should replace "ss" with padded seconds', () => {
      const date = new Date(2017, 0, 1, 0, 1, 2);
      expect(DateHelper.format(date, 'ss')).to.equal('02');
    });

    it('should replace "s" with seconds', () => {
      const date = new Date(2017, 0, 1, 0, 1, 2);
      expect(DateHelper.format(date, 's')).to.equal('2');
    });
  });
});
