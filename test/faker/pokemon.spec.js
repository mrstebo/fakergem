"use strict";
const expect = require("chai").expect;
const sinon = require("sinon");
const sinonTest = require("sinon-test")(sinon, { useFakeTimers: false });
const Faker = require("../../src/index");
const data = require("../../data/pokemon.json");

describe("Pokemon", () => {
  describe("#name", () => {
    it("should return a name", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["names"]).returns("name");
      expect(Faker.Pokemon.name()).to.eql("name");
    }));
  });

  describe("#location", () => {
    it("should return a location", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["locations"]).returns("location");
      expect(Faker.Pokemon.location()).to.eql("location");
    }));
  });
});
