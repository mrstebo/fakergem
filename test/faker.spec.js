'use strict';
const expect = require('chai').expect;
const Faker = require('../src/faker');

describe('#Faker', () => {
  it('should be an object', () => {
    expect(Faker).to.be.a('object');
  });

  describe('#Address', () => {
    expect(Faker.Address).to.be.a('object');
  });

  describe('#Ancient', () => {
    expect(Faker.Ancient).to.be.a('object');
  });

  describe('#App', () => {
    expect(Faker.App).to.be.a('object');
  });

  describe('#Avatar', () => {
    expect(Faker.Avatar).to.be.a('object');
  });

  describe('#Beer', () => {
    it('should return an object', () => {
      expect(Faker.Beer).to.be.a('object');
    });
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

  describe('#RockBand', () => {
    it('should return an object', () => {
      expect(Faker.RockBand).to.be.a('object');
    });
  });

  describe('#SlackEmoji', () => {
    it('should return an object', () => {
      expect(Faker.SlackEmoji).to.be.a('object');
    });
  });

  describe('#StarWars', () => {
    it('should return an object', () => {
      expect(Faker.StarWars).to.be.a('object');
    });
  });

  describe('#Superhero', () => {
    it('should return an object', () => {
      expect(Faker.Superhero).to.be.a('object');
    });
  });

  describe('#Time', () => {
    it('should return an object', () => {
      expect(Faker.Time).to.be.a('object');
    });
  });
});
