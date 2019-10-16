"use strict";
const expect = require("chai").expect;
const sinon = require("sinon");
const sinonTest = require("sinon-test")(sinon, { useFakeTimers: false });
const Faker = require("../../src/index");
const data = require("../../data/friends.json");

describe("Friends", () => {
  describe("#character", () => {
    it("should return a character", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["characters"]).returns("character");
      expect(Faker.Friends.character()).to.eql("character");
    }));
  });

  describe("#location", () => {
    it("should return a location", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["locations"]).returns("location");
      expect(Faker.Friends.location()).to.eql("location");
    }));
  });

  describe("#quote", () => {
    it("should return a quote", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["quotes"]).returns("quote");
      expect(Faker.Friends.quote()).to.eql("quote");
    }));
  });
});
