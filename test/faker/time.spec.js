'use strict';
const chai = require('chai');
const { expect } = chai;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');

chai.use(require('chai-datetime'));

describe('Time', () => {
  describe('#between', () => {
    it('should return a Date', sinonTest(function() {
      const date = new Date();
      const numberStub = this.stub(Faker.Number, 'between');
      this.stub(Faker.Date, 'between').withArgs(date, date).returns(date);
      numberStub.withArgs().returns(0, 23).returns(13);
      numberStub.withArgs(0, 59).returns(11);
      expect(Faker.Time.between(date, date)).to.eql(new Date(2018, 4, 21, 13, 11, 11));
    }));

    it('should handle string dates', () => {
      const from = new Date(2017, 0, 1);
      const to = new Date(2017, 0, 10);
      expect(Faker.Time.between('2017-01-01', '2017-01-10')).to.be.withinDate(from, to);
    });

    it('should return a date between two dates', () => {
      const from = new Date(2017, 9, 1);
      const to = new Date(2017, 9, 31);
      expect(Faker.Time.between(from, to)).to.be.withinTime(from, to);
    });

    it('should return only date if Faker.Time.BETWEEN is the period', () => {
      const from = new Date(2017, 9, 1);
      const to = new Date(2017, 9, 31);
      [...Array(100).keys()].forEach(_ => {
        const date = Faker.Time.between(from, to, Faker.Time.BETWEEN);
        expect(date.getHours()).to.equal(0);
        expect(date.getMinutes()).to.equal(0);
        expect(date.getSeconds()).to.equal(0);
      });
    });

    it('should return a time between a specified period', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Time.between(new Date(), new Date(), Faker.Time.ALL).getHours()).to.be.within(0, 23);
        expect(Faker.Time.between(new Date(), new Date(), Faker.Time.DAY).getHours()).to.be.within(9, 17);
        expect(Faker.Time.between(new Date(), new Date(), Faker.Time.NIGHT).getHours()).to.be.within(18, 23);
        expect(Faker.Time.between(new Date(), new Date(), Faker.Time.MORNING).getHours()).to.be.within(6, 11);
        expect(Faker.Time.between(new Date(), new Date(), Faker.Time.AFTERNOON).getHours()).to.be.within(12, 17);
        expect(Faker.Time.between(new Date(), new Date(), Faker.Time.EVENING).getHours()).to.be.within(17, 21);
        expect(Faker.Time.between(new Date(), new Date(), Faker.Time.MIDNIGHT).getHours()).to.be.within(0, 4);
        expect(Faker.Time.between(new Date(), new Date(), Faker.Time.BETWEEN).getHours()).to.be.within(0, 23);
      });
    });

    it('should return a formatted date', () => {
      const date = new Date();
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Time.between(date, date, Faker.Time.ALL, 'yyyy-MM-dd HH:mm:ss')).to.match(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/);
      });
    });
  });

  // describe('#forward', () => {
  //   it('should return a Date', () => {
  //     [...Array(100).keys()].forEach(_ => {
  //       expect(Faker.Time.forward()).to.be.a('Date');
  //     });
  //   });
  //
  //   it('should return a time in the future', () => {
  //     [...Array(100).keys()].forEach(_ => {
  //       expect(Faker.Time.forward()).to.be.afterTime(new Date());
  //     });
  //   });
  //
  //   it('should return a time no greater than the specified number of days', () => {
  //     const today = new Date();
  //     today.setHours(0, 0, 0, 0);
  //     const max = new Date();
  //     max.setDate(max.getDate() + 10);
  //     max.setHours(23, 59, 59, 0);
  //     [...Array(100).keys()].forEach(_ => {
  //       expect(Faker.Time.forward(10)).to.be.withinTime(today, max);
  //     });
  //   });
  //
  //   it('should return a time between a specified period', () => {
  //     [...Array(100).keys()].forEach(_ => {
  //       expect(Faker.Time.forward(10, Faker.Time.ALL).getHours()).to.be.within(0, 23);
  //       expect(Faker.Time.forward(10, Faker.Time.DAY).getHours()).to.be.within(9, 17);
  //       expect(Faker.Time.forward(10, Faker.Time.NIGHT).getHours()).to.be.within(18, 23);
  //       expect(Faker.Time.forward(10, Faker.Time.MORNING).getHours()).to.be.within(6, 11);
  //       expect(Faker.Time.forward(10, Faker.Time.AFTERNOON).getHours()).to.be.within(12, 17);
  //       expect(Faker.Time.forward(10, Faker.Time.EVENING).getHours()).to.be.within(17, 21);
  //       expect(Faker.Time.forward(10, Faker.Time.MIDNIGHT).getHours()).to.be.within(0, 4);
  //     });
  //   });
  //
  //   it('should throw if BETWEEN period specified', () => {
  //     expect(() => Faker.Time.forward(10, Faker.Time.BETWEEN)).to.throw('invalid period');
  //   });
  //
  //   it('should return a formatted date', () => {
  //     const date = new Date();
  //     [...Array(100).keys()].forEach(_ => {
  //       expect(Faker.Time.forward(10, Faker.Time.ALL, 'yyyy-MM-dd HH:mm:ss')).to.match(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/);
  //     });
  //   });
  // });
  //
  // describe('#backward', () => {
  //   it('should return a Date', () => {
  //     [...Array(100).keys()].forEach(_ => {
  //       expect(Faker.Time.backward()).to.be.a('Date');
  //     });
  //   });
  //
  //   it('should return a time in the past', () => {
  //     [...Array(100).keys()].forEach(_ => {
  //       expect(Faker.Time.backward()).to.be.beforeTime(new Date());
  //     });
  //   });
  //
  //   it('should return a time no less than the specified number of days', () => {
  //     const today = new Date();
  //     today.setHours(0, 0, 0, 0);
  //     const min = new Date();
  //     min.setDate(min.getDate() - 10);
  //     min.setHours(0, 0, 0, 0);
  //     [...Array(100).keys()].forEach(_ => {
  //       expect(Faker.Time.backward(10)).to.be.withinDate(min, today);
  //     });
  //   });
  //
  //   it('should return a time between a specified period', () => {
  //     [...Array(100).keys()].forEach(_ => {
  //       expect(Faker.Time.backward(10, Faker.Time.ALL).getHours()).to.be.within(0, 23);
  //       expect(Faker.Time.backward(10, Faker.Time.DAY).getHours()).to.be.within(9, 17);
  //       expect(Faker.Time.backward(10, Faker.Time.NIGHT).getHours()).to.be.within(18, 23);
  //       expect(Faker.Time.backward(10, Faker.Time.MORNING).getHours()).to.be.within(6, 11);
  //       expect(Faker.Time.backward(10, Faker.Time.AFTERNOON).getHours()).to.be.within(12, 17);
  //       expect(Faker.Time.backward(10, Faker.Time.EVENING).getHours()).to.be.within(17, 21);
  //       expect(Faker.Time.backward(10, Faker.Time.MIDNIGHT).getHours()).to.be.within(0, 4);
  //     });
  //   });
  //
  //   it('should throw if BETWEEN period specified', () => {
  //     expect(() => Faker.Time.backward(10, Faker.Time.BETWEEN)).to.throw('invalid period');
  //   });
  //
  //   it('should return a formatted date', () => {
  //     const date = new Date();
  //     [...Array(100).keys()].forEach(_ => {
  //       expect(Faker.Time.backward(10, Faker.Time.ALL, 'yyyy-MM-dd HH:mm:ss')).to.match(/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/);
  //     });
  //   });
  // });
});
