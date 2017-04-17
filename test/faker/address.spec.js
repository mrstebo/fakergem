'use strict';
const expect = require('chai').expect;
const Address = require('../../src/faker/address');
const data = require('../../data/address.json');

describe('Address', () => {
  describe('#city', () => {
    it('should return a string', () => {
      expect(Address.city()).to.be.a('string');
    });
  });

  describe('#streetName', () => {
    it('should return a string', () => {
      expect(Address.streetName()).to.be.a('string');
    });
  });

  describe('#streetAddress', () => {
    it('should return a string', () => {
      expect(Address.streetAddress()).to.be.a('string');
    });
  });

  describe('#secondaryAddress', () => {
    it('should return a string', () => {
      expect(Address.secondaryAddress()).to.be.a('string');
    });
  });

  describe('#buildingNumber', () => {
    it('should return a string', () => {
      expect(Address.buildingNumber()).to.be.a('string');
    });
  });

  describe('#zipCode', () => {
    it('should return a string', () => {
      expect(Address.zipCode()).to.be.a('string');
    });
  });

  describe('#zip', () => {
    it('should return a string', () => {
      expect(Address.zip()).to.be.a('string');
    });
  });

  describe('#postcode', () => {
    it('should return a string', () => {
      expect(Address.postcode()).to.be.a('string');
    });
  });

  describe('#timeZone', () => {
    it('should return a string', () => {
      expect(Address.timeZone()).to.be.a('string');
    });
  });

  describe('#streetSuffix', () => {
    it('should return a string', () => {
      expect(Address.streetSuffix()).to.be.a('string');
    });
  });

  describe('#citySuffix', () => {
    it('should return a string', () => {
      expect(Address.citySuffix()).to.be.a('string');
    });
  });

  describe('#cityPrefix', () => {
    it('should return a string', () => {
      expect(Address.cityPrefix()).to.be.a('string');
    });
  });

  describe('#state', () => {
    it('should return a string', () => {
      expect(Address.state()).to.be.a('string');
    });
  });

  describe('#stateAbbr', () => {
    it('should return a string', () => {
      expect(Address.stateAbbr()).to.be.a('string');
    });
  });

  describe('#country', () => {
    it('should return a string', () => {
      expect(Address.country()).to.be.a('string');
    });
  });

  describe('#countryCode', () => {
    it('should return a string', () => {
      expect(Address.countryCode()).to.be.a('string');
    });
  });

  describe('#latitude', () => {
    it('should return a string', () => {
      expect(Address.latitude()).to.be.a('string');
    });
  });

  describe('#longitude', () => {
    it('should return a string', () => {
      expect(Address.longitude()).to.be.a('string');
    });
  });
});
