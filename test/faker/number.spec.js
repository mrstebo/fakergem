"use strict";
const expect = require("chai").expect;
const Faker = require("../../src/index");

describe("Number", () => {
  describe("#number", () => {
    it("should return a number string", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.number()).to.be.a("string");
      });
    });

    it("should return 10 digits by default", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.number()).to.match(/^\d{10}$/);
      });
    });

    it("should return number with specified digits", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.number(1)).to.match(/^\d{1}$/);
        expect(Faker.Number.number(2)).to.match(/^\d{2}$/);
        expect(Faker.Number.number(3)).to.match(/^\d{3}$/);
        expect(Faker.Number.number(4)).to.match(/^\d{4}$/);
        expect(Faker.Number.number(5)).to.match(/^\d{5}$/);
      });
    });
  });

  describe("#decimal", () => {
    it("should return 5 left digits by default", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.decimal()).to.match(/\d{2}\.\d+/);
      });
    });

    it("should return 2 right digits by default", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.decimal()).to.match(/\d+\.\d{2}/);
      });
    });

    it("should return number of specified left digits", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.decimal(1)).to.match(/\d{1}\.\d{2}/);
        expect(Faker.Number.decimal(2)).to.match(/\d{2}\.\d{2}/);
        expect(Faker.Number.decimal(3)).to.match(/\d{3}\.\d{2}/);
      });
    });

    it("should return number of specified right digits", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.decimal(2, 1)).to.match(/\d{2}\.\d{1}/);
        expect(Faker.Number.decimal(2, 2)).to.match(/\d{2}\.\d{2}/);
        expect(Faker.Number.decimal(2, 3)).to.match(/\d{2}\.\d{3}/);
      });
    });
  });

  describe("#normal", () => {
    it("should return a decimal number", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.normal()).to.match(/\d+\.\d+/);
      });
    });

    it("should be within delta range", () => {
      let n = 10000;
      let values = [...Array(n).keys()].map(() => Faker.Number.normal(150.0, 100.0));
      let mean = values.reduce((acc, val) => acc + val) / n;
      let variance = values.reduce((acc, val) => acc + Math.pow(val - mean, 2) / (n - 1));
      let standardDeviation = Math.sqrt(variance);
      expect(150.0).to.be.closeTo(mean, 5.0);
      expect(100.0).to.be.closeTo(standardDeviation, 3.0);
    });
  });

  describe("#hexadecimal", () => {
    it("should return 6 digits by default", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.hexadecimal()).to.match(/.{6}/);
      });
    });

    it("should only return hex characters", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.hexadecimal()).to.match(/[a-f0-9]+/);
      });
    });

    it("should return number of specified digits", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.hexadecimal(12)).to.match(/.{12}/);
      });
    });
  });

  describe("#between", () => {
    it("should return a value between 1 and 5000 by default", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.between()).to.be.within(1, 5000);
      });
    });

    it("should return a value within the specified range", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.between(5, 10)).to.be.within(5, 10);
      });
    });

    it("should handle from being greater than to", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.between(10, 5)).to.be.within(5, 10);
      });
    });
  });

  describe("#betweenF", () => {
    it("should return a value between 1 and 5000 by default", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.betweenF()).to.be.within(1.00, 5000.00);
      });
    });

    it("should return a value within the specified range", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.betweenF(5.10, 5.90)).to.be.within(5.10, 5.90);
      });
    });

    it("should handle from being greater than to", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.betweenF(5.90, 5.10)).to.be.within(5.10, 5.90);
      });
    });
  });

  describe("#positive", () => {
    it("should return a value between 1 and 5000 by default", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.positive()).to.be.within(1, 5000);
      });
    });

    it("should return a positive value between the specified range", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.positive(5, 10)).to.be.within(5, 10);
      });
    });

    it("should convert negative value to a positive value", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.positive(-5, -10)).to.be.within(5, 10);
      });
    });

    it("should handle from being greater than to", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.positive(10, 5)).to.be.within(5, 10);
      });
    });
  });

  describe("#negative", () => {
    it("should return a value between -1 and -5000 by default", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.negative()).to.be.within(-5000, -1);
      });
    });

    it("should return a negative value between the specified range", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.negative(-5, -10)).to.be.within(-10, -5);
      });
    });

    it("should convert positive value to a negative value", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.negative(5, 10)).to.be.within(-10, -5);
      });
    });

    it("should handle from being less than to", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.between(-10, -5)).to.be.within(-10, -5);
      });
    });
  });

  describe("#digit", () => {
    it("should return a number from 0 to 9", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Number.digit()).to.match(/[0-9]/);
      });
    });
  });
});
