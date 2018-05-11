'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
const data = require('../../data/address.json');

describe('Address', () => {
  describe('#city', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.city()).to.be.a('string');
      });
    });
  });

  describe('#streetName', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.streetName()).to.be.a('string');
      });
    });

    it('should end with a street suffix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.streetName().split(/\s/)[1]).to.be.oneOf(data['streetSuffixes']);
      });
    });
  });

  describe('#streetAddress', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.streetAddress()).to.be.a('string');
      });
    });
  });

  describe('#secondaryAddress', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.secondaryAddress()).to.be.a('string');
      });
    });

    it('should return a prefixed address', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.secondaryAddress().split(/\s/)[0]).to.be.oneOf(data['secondaryAddressPrefixes']);
      });
    });

    it('should end with a 3 digit number', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.secondaryAddress().split(/\s/)[1]).to.match(/^\d{3}$/);
      });
    });
  });

  describe('#buildingNumber', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.buildingNumber()).to.be.a('string');
      });
    });

    it('should return a number between 100 and 99999', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.buildingNumber()).to.match(/^\d{3}[0-9]?[0-9]?$/);
      });
    });
  });

  describe('#zipCode', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.zipCode()).to.be.a('string');
      });
    });

    it('should return state zip code if stateAbbreviation is specified', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.zipCode('AL')).to.match(/^350/);
      });
    });
  });

  describe('#zip', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.zip()).to.be.a('string');
      });
    });

    it('should return state zip if stateAbbreviation is specified', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.zip('AL')).to.match(/^350/);
      });
    });
  });

  describe('#postcode', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.postcode()).to.be.a('string');
      });
    });

    it('should return state postcode if stateAbbreviation is specified', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.postcode('AL')).to.match(/^350/);
      });
    });
  });

  describe('#timeZone', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.timeZone()).to.be.a('string');
      });
    });

    it('should return a time zone', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.timeZone()).to.be.oneOf(data['timeZones']);
      });
    });
  });

  describe('#streetSuffix', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.streetSuffix()).to.be.a('string');
      });
    });

    it('should return a street suffix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.streetSuffix()).to.be.oneOf(data['streetSuffixes']);
      });
    });
  });

  describe('#citySuffix', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.citySuffix()).to.be.a('string');
      });
    });

    it('should return a city suffix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.citySuffix()).to.be.oneOf(data['citySuffixes']);
      });
    });
  });

  describe('#cityPrefix', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.cityPrefix()).to.be.a('string');
      });
    });

    it('should return a city prefix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.cityPrefix()).to.be.oneOf(data['cityPrefixes']);
      });
    });
  });

  describe('#state', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.state()).to.be.a('string');
      });
    });

    it('should return a state', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.state()).to.be.oneOf(data['states']);
      });
    });
  });

  describe('#stateAbbr', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.stateAbbr()).to.be.a('string');
      });
    });

    it('should return a state abbreviation', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.stateAbbr()).to.be.oneOf(data['stateAbbreviations']);
      });
    });
  });

  describe('#country', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.country()).to.be.a('string');
      });
    });

    it('should return a country', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.country()).to.be.oneOf(data['countries']);
      });
    });
  });

  describe('#countryCode', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.countryCode()).to.be.a('string');
      });
    });

    it('should return a country code', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.countryCode()).to.be.oneOf(data['countryCodes']);
      });
    });
  });

  describe('#latitude', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.latitude()).to.be.a('string');
      });
    });

    it('should return a number -90 and 90', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(parseFloat(Faker.Address.latitude())).to.be.within(-90, 90);
      });
    });
  });

  describe('#longitude', () => {
    it('should return a string', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Address.longitude()).to.be.a('string');
      });
    });

    it('should return a number -180 and 180', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(parseFloat(Faker.Address.longitude())).to.be.within(-180, 180);
      });
    });
  });
});
