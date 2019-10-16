"use strict";
const expect = require("chai").expect;
const sinon = require("sinon");
const sinonTest = require("sinon-test")(sinon, { useFakeTimers: false });
const Faker = require("../../src/index");
const data = require("../../data/name.json");

describe("Name", () => {
  describe("#name", () => {
    it("should return a first and last name", sinonTest(function() {
      this.stub(Faker.Name, "firstName").returns("fn");
      this.stub(Faker.Name, "lastName").returns("ln");
      expect(Faker.Name.name()).to.eql("fn ln");
    }));
  });

  describe("#nameWithMiddle", () => {
    it("should return two first names and a last name", sinonTest(function() {
      this.stub(Faker.Name, "firstName").returns("fn");
      this.stub(Faker.Name, "lastName").returns("ln");
      expect(Faker.Name.nameWithMiddle()).to.eql("fn fn ln");
    }));
  });

  describe("#firstName", () => {
    it("should return a first name", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["firstNames"]).returns("first name");
      expect(Faker.Name.firstName()).to.eql("first name");
    }));
  });

  describe("#lastName", () => {
    it("should return a last name", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["lastNames"]).returns("last name");
      expect(Faker.Name.lastName()).to.eql("last name");
    }));
  });

  describe("#prefix", () => {
    it("should return a prefix", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["prefixes"]).returns("prefix");
      expect(Faker.Name.prefix()).to.eql("prefix");
    }));
  });

  describe("#suffix", () => {
    it("should return a suffix", sinonTest(function() {
      this.stub(Faker.Random, "element").withArgs(data["suffixes"]).returns("suffix");
      expect(Faker.Name.suffix()).to.eql("suffix");
    }));
  });

  describe("#title", () => {
    it("should return a title descriptor, level and job", sinonTest(function() {
      const randomStub = this.stub(Faker.Random, "element");
      randomStub.withArgs(data["titles"]["descriptor"]).returns("Elite");
      randomStub.withArgs(data["titles"]["level"]).returns("Warrior");
      randomStub.withArgs(data["titles"]["job"]).returns("Mage");
      expect(Faker.Name.title()).to.eql("Elite Warrior Mage");
    }));
  });
});
