'use strict';
const chai = require('chai');
const { expect } = chai;
const DateFaker = require('../../src/faker/date');

chai.use(require('chai-datetime'));

describe('#Date', () => {
  describe('#between', () => {
    it('should return a Date', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(DateFaker.between(new Date(), new Date())).to.be.a('Date');
      });
    });

    it('should handle string dates', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 0, 10);
      [...Array(100).keys()].forEach(_ => {
        expect(DateFaker.between('2017-01-01', '2017-01-10')).to.be.withinDate(from, to);
      });
    });

    it('should return a date between two dates', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 0, 10);

      [...Array(100).keys()].forEach(_ => {
        expect(DateFaker.between(from, to)).to.be.withinDate(from, to);
      });
    });
  });

  describe('#betweenExcept', () => {
    it('should return a Date', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 0, 10);
      const except = new Date(2017, 0, 5);
      [...Array(100).keys()].forEach(_ => {
        expect(DateFaker.betweenExcept(from, to, except)).to.be.a('Date');
      });
    });

    it('should handle string dates', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 0, 10);
      const except = new Date(2017, 0, 4);
      [...Array(100).keys()].forEach(_ => {
        expect( DateFaker.betweenExcept('2017-01-01', '2017-01-10', '2017-01-04'))
          .to.be.withinDate(from, to)
          .and.not.equal(except);
      });
    });

    it('should return a date in between two dates except for the excepted date', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 0, 10);
      const except = new Date(2017, 0, 5);

      [...Array(100).keys()].forEach(_ => {
        expect(DateFaker.betweenExcept(from, to, except))
          .to.be.withinDate(from, to)
          .and.not.equal(except);
      });
    });
  });

  describe('#forward', () => {
    it('should return a Date', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(DateFaker.forward()).to.be.a('Date');
      });
    });

    it('should return a date in the future', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(DateFaker.forward()).to.be.afterDate(new Date());
      });
    });

    it('should return a date no greater than the specified number of days', () => {
      const max = new Date();
      max.setDate(max.getDate() + 10);
      max.setHours(0, 0, 0, 0);

      [...Array(100).keys()].forEach(_ => {
        expect(DateFaker.forward(10)).to.be.withinDate(new Date(), max);
      });
    });
  });

  describe('#backward', () => {
    it('should return a Date', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(DateFaker.backward()).to.be.a('Date');
      });
    });

    it('should return a date in the past', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(DateFaker.backward()).to.be.beforeDate(new Date());
      });
    });

    it('should return a date no less than the specified number of days', () => {
      const min = new Date();
      min.setDate(min.getDate() - 10);
      min.setHours(0, 0, 0, 0);

      [...Array(100).keys()].forEach(_ => {
        expect(DateFaker.backward(10)).to.be.withinDate(min, new Date());
      });
    });
  });

  describe('#birthday', () => {
    it('should return a Date', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(DateFaker.birthday()).to.be.a('Date');
      });
    });

    it('should return a birth date between two ages', () => {
      const now = new Date();
      const from = new Date(now.getYear() - 25, now.getMonth(), now.getDate());
      const to = new Date(now.getYear() - 18, now.getMonth(), now.getDate());
      [...Array(100).keys()].forEach(_ => {
        expect(DateFaker.birthday(18, 25)).to.be.withinDate(from, to);
      });
    });
  });
});
