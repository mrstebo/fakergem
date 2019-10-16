"use strict";
const expect = require("chai").expect;
const sinon = require("sinon");
const sinonTest = require("sinon-test")(sinon, { useFakeTimers: false });
const Faker = require("../../src/index");
const data = require("../../data/lord-of-the-rings.json");

describe("LordOfTheRings", () => {
  describe("#character", () => {
    it("should return a character", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["characters"]).returns("character");
      expect(Faker.LordOfTheRings.character()).to.eql("character");
    }));
  });

  describe("#location", () => {
    it("should return a location", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["locations"]).returns("location");
      expect(Faker.LordOfTheRings.location()).to.eql("location");
    }));
  });
});
