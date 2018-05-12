'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');
const data = require('../../data/address.json');

describe('Address', () => {
  describe('#city', () => {
    it('should return a city', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['cities']).returns('city');
      expect(Faker.Address.city()).to.eql('city');
    }));

    it('should run the city through the Fake faker', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['cities']).returns('{cityPrefix} {Name.firstName}{citySuffix}');
      this.stub(Faker.Address, 'cityPrefix').returns('Mount');
      this.stub(Faker.Address, 'citySuffix').returns('ville');
      this.stub(Faker.Name, 'firstName').returns('Thomas');
      expect(Faker.Address.city()).to.eql('Mount Thomasville');
    }));
  });

  describe('#streetName', () => {
    it('should return a street name', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['streetNames']).returns('my street');
      expect(Faker.Address.streetName()).to.eql('my street');
    }));

    it('should run the street name through the Fake faker', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['streetNames']).returns('{Name.firstName} {streetSuffix}');
      this.stub(Faker.Name, 'firstName').returns('Steven');
      this.stub(Faker.Address, 'streetSuffix').returns('Street');
      expect(Faker.Address.streetName()).to.eql('Steven Street');
    }));
  });

  describe('#streetAddress', () => {
    it('should return a street address', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['streetAddresses']).returns('street address');
      expect(Faker.Address.streetAddress()).to.eql('street address');
    }));

    it('should run the street address through the Fake faker', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['streetAddresses']).returns('{buildingNumber} {streetName}');
      this.stub(Faker.Address, 'buildingNumber').returns('53');
      this.stub(Faker.Address, 'streetName').returns('Thomas Road');
      expect(Faker.Address.streetAddress()).to.eql('53 Thomas Road');
    }));
  });

  describe('#secondaryAddress', () => {
    it('should return a secondary address', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['secondaryAddressPrefixes']).returns('secondary address');
      expect(Faker.Address.secondaryAddress()).to.match(/^secondary address \d{3}$/);
    }));

    it('should run the secondary address through the Fake faker', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['secondaryAddressPrefixes']).returns('Apt.');
      const numberStub = this.stub(Faker.Number, 'between');
      numberStub.withArgs(1, 9).returns(3);
      numberStub.withArgs(0, 9).returns(8);
      expect(Faker.Address.secondaryAddress()).to.eql('Apt. 388');
    }));
  });

  describe('#buildingNumber', () => {
    it('should return a building number', sinonTest(function() {
      this.stub(Faker.Number, 'between').returns(5);
      expect(Faker.Address.buildingNumber()).to.eql('5');
    }));

    it('should return a number between 100 and 99999', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.buildingNumber()).to.match(/^\d{3}[0-9]?[0-9]?$/);
      });
    });
  });

  describe('#zipCode', () => {
    it('should return a post code', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['postcodes']).returns('postcode');
      expect(Faker.Address.zipCode()).to.eql('postcode');
    }));

    it('should return state zip code if stateAbbreviation is specified', () => {
      expect(Faker.Address.zipCode('AL')).to.match(/^350/);
    });

    it('should run the zip code through the Fake faker', sinonTest(function() {
      this.stub(Faker.Number, 'between').returns(1);
      expect(Faker.Address.zipCode('AL')).to.eql('35011');
    }));
  });

  describe('#zip', () => {
    it('should return zipCode', sinonTest(function() {
      this.stub(Faker.Address, 'zipCode').returns('zip code');
      expect(Faker.Address.zip()).to.eql('zip code');
    }));

    it('should return state zip if stateAbbreviation is specified', () => {
      expect(Faker.Address.zip('AL')).to.match(/^350/);
    });
  });

  describe('#postcode', () => {
    it('should return zipCode', sinonTest(function() {
      this.stub(Faker.Address, 'zipCode').returns('zip code');
      expect(Faker.Address.postcode()).to.eql('zip code');
    }));

    it('should return state zip if stateAbbreviation is specified', () => {
      expect(Faker.Address.postcode('AL')).to.match(/^350/);
    });
  });

  describe('#timeZone', () => {
    it('should return a time zone', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['timeZones']).returns('time zone');
      expect(Faker.Address.timeZone()).to.eql('time zone');
    }));
  });

  describe('#streetSuffix', () => {
    it('should return a street suffix', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['streetSuffixes']).returns('street suffix');
      expect(Faker.Address.streetSuffix()).to.eql('street suffix');
    }));
  });

  describe('#citySuffix', () => {
    it('should return a city suffix', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['citySuffixes']).returns('city suffix');
      expect(Faker.Address.citySuffix()).to.eql('city suffix');
    }));
  });

  describe('#cityPrefix', () => {
    it('should return a city prefix', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['cityPrefixes']).returns('city prefix');
      expect(Faker.Address.cityPrefix()).to.eql('city prefix');
    }));
  });

  describe('#state', () => {
    it('should return a state', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['states']).returns('state');
      expect(Faker.Address.state()).to.eql('state');
    }));
  });

  describe('#stateAbbr', () => {
    it('should return a state abbreviation', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['stateAbbreviations']).returns('state abbreviation');
      expect(Faker.Address.stateAbbr()).to.eql('state abbreviation');
    }));
  });

  describe('#country', () => {
    it('should return a country', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['countries']).returns('country');
      expect(Faker.Address.country()).to.eql('country');
    }));
  });

  describe('#countryCode', () => {
    it('should return a country code', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['countryCodes']).returns('country code');
      expect(Faker.Address.countryCode()).to.eql('country code');
    }));
  });

  describe('#latitude', () => {
    it('should return a latitude', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(0.00, 180.00).returns(120);
      expect(Faker.Address.latitude()).to.eql('30');
    }));
  });

  describe('#longitude', () => {
    it('should return a longitude', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(0.00, 360.00).returns(200);
      expect(Faker.Address.longitude()).to.eql('20');
    }));
  });
});
