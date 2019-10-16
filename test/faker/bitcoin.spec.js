"use strict";
const expect = require("chai").expect;
const Faker = require("../../src/index");

describe("Bitcoin", () => {
  describe("#address", () => {
    it("should return a hash", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Bitcoin.address()).to.match(/[0-9a-zA-Z]+/);
      });
    });
  });

  describe("#testnetAddress", () => {
    it("should return a hash", () => {
      [...Array(100).keys()].forEach(() => {
        expect(Faker.Bitcoin.testnetAddress()).to.match(/[0-9a-zA-Z]+/);
      });
    });
  });
});
