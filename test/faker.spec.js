'use strict';
const expect = require('chai').expect;
const Faker = require('../src/faker').default;

describe('#Faker', () => {
  it('should be an object', () => {
    expect(Faker).to.be.a('object');
  });

  describe('#App', () => {
    expect(Faker.App).to.be.a('object');
  });

  describe('#Boolean', () => {
    it('should return an object', () => {
      expect(Faker.Boolean).to.be.a('object');
    });
  });

  describe('#Color', () => {
    it('should return an object', () => {
      expect(Faker.Color).to.be.a('object');
    });
  });

  describe('#Date', () => {
    it('should return an object', () => {
      expect(Faker.Date).to.be.a('object');
    });
  });

  describe('#Friends', () => {
    it('should return an object', () => {
      expect(Faker.Friends).to.be.a('object');
    });
  });

  describe('#Lorem', () => {
    it('should return an object', () => {
      expect(Faker.Lorem).to.be.a('object');
    });
  });

  describe('#LoremFlickr', () => {
    it('should return an object', () => {
      expect(Faker.LoremFlickr).to.be.a('object');
    });
  });

  describe('#Name', () => {
    it('should return an object', () => {
      expect(Faker.Name).to.be.a('object');
    });
  });

  describe('#Number', () => {
    it('should return an object', () => {
      expect(Faker.Number).to.be.a('object');
    });
  });

  describe('#Placeholdit', () => {
    it('should return an object', () => {
      expect(Faker.Placeholdit).to.be.a('object');
    });
  });

  describe('#StarWars', () => {
    it('should return an object', () => {
      expect(Faker.StarWars).to.be.a('object');
    });
  });

  describe('#Time', () => {
    it('should return an object', () => {
      expect(Faker.Time).to.be.a('object');
    });
  });
});
