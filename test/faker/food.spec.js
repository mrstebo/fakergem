"use strict";
const expect = require("chai").expect;
const sinon = require("sinon");
const sinonTest = require("sinon-test")(sinon, { useFakeTimers: false });
const Faker = require("../../src/index");
const data = require("../../data/food.json");

describe("Food", () => {
  describe("#ingredient", () => {
    it("should return a ingredient", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["ingredients"]).returns("ingredient");
      expect(Faker.Food.ingredient()).to.eql("ingredient");
    }));
  });

  describe("#spice", () => {
    it("should return a spice", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["spices"]).returns("spice");
      expect(Faker.Food.spice()).to.eql("spice");
    }));
  });

  describe("#measurement", () => {
    it("should return a measurement", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["measurements"]).returns("measurement");
      expect(Faker.Food.measurement()).to.eql("measurement");
    }));
  });
});
