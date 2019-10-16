"use strict";
const expect = require("chai").expect;
const Random = require("../../src/utils/random");

describe("Random", () => {
  describe("#randomNumber", () => {
    it("should return a number between min and max", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Random.randomNumber(10, 20)).to.be.within(10, 20);
      });
    });
  });

  describe("#randomFloat", () => {
    it("should return a number between min and max", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Random.randomFloat(0, 2)).to.be.within(0, 2);
      });
    });
  });

  describe("#itemFromCollection", () => {
    it("should return an item from a collection", () => {
      const collection = [1, 2, 3, 4, 5];
      [...Array(100).keys()].forEach(() => {
        expect(Random.itemFromCollection(collection)).to.be.oneOf(collection);
      });
    });
  });
});
