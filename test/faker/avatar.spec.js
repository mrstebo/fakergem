"use strict";
const expect = require("chai").expect;
const sinon = require("sinon");
const sinonTest = require("sinon-test")(sinon, { useFakeTimers: false });
const Faker = require("../../src/index");

describe("Avatar", () => {
  describe("#image", () => {
    it("should return a url", sinonTest(function() {
      this.stub(Faker.Lorem, "words").withArgs(3).returns(["this", "are", "test"]);
      expect(Faker.Avatar.image()).to.eql("https://robohash.org/this-are-test.png?size=300x300&set=set1");
    }));

    it("should return url with specified slug", () => {
      expect(Faker.Avatar.image("hello-world")).to.eql("https://robohash.org/hello-world.png?size=300x300&set=set1");
    });

    it("should return url with specified size", () => {
      expect(Faker.Avatar.image("hello-world", "64x64")).to.eql("https://robohash.org/hello-world.png?size=64x64&set=set1");
    });

    it("should return url with specified format", () => {
      ["png", "jpg", "bmp"].forEach(format => {
        expect(Faker.Avatar.image("hello-world", "64x64", format)).to.equal(`https://robohash.org/hello-world.${format}?size=64x64&set=set1`);
      });
    });

    it("should return url with specified set", () => {
      expect(Faker.Avatar.image("hello-world", "64x64", "png", "test_set")).to.eql("https://robohash.org/hello-world.png?size=64x64&set=test_set");
    });

    it("should return url with specified bgset", () => {
      expect(Faker.Avatar.image("hello-world", "64x64", "png", "test_set", "test_bg_set")).to.eql("https://robohash.org/hello-world.png?size=64x64&set=test_set&bgset=test_bg_set");
    });

    it("should throw is size is not in a valid format", () => {
      ["100", "abc", "2x2x2"].forEach(size => {
        expect(() => Faker.Avatar.image("test", size)).to.throw();
      });
    });

    it("should throw is format is not in a supported", () => {
      ["gif", "mov", "2x2x2"].forEach(format => {
        expect(() => Faker.Avatar.image("test", "300x300", format)).to.throw();
      });
    });
  });
});
