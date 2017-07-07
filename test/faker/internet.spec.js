'use strict';
const expect = require('chai').expect;
const Internet = require('../../src/faker/internet');
const data = require('../../data/internet.json');
const nameData = require('../../data/name.json');

describe('Internet', () => {
  describe('#email', () => {
  });

  describe('#freeEmail', () => {
  });

  describe('#safeEmail', () => {
  });

  describe('#userName', () => {
  });

  describe('#password', () => {
    it('should return a password', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Internet.password()).to.match(/^[a-zA-Z0-9]+$/);
      });
    });

    it('should return a password between 8 and 16 alphanumeric characters by default', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Internet.password()).to.match(/^[a-zA-Z0-9]{8,16}$/);
      });
    });

    it('should return a lowercase password when mixCase is false', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Internet.password(8, 16, false)).to.match(/^[a-z0-9]+$/);
      });
    });

    it('should return a password with special characters when specialChars is true', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Internet.password(128, 128, true, true)).to.match(/[\!\@\#\$\%\^\&\*]/);
      });
    });
  });

  describe('#domainName', () => {
    it('should return a domainName', () => {
      [...Array(100).keys()].forEach(_ => {
        const domainName = Internet.domainName();
        expect(domainName.split('.')[0]).to.be.oneOf(nameData['lastNames']);
        expect(domainName.split('.')[1]).to.be.oneOf(data['domainSuffixes']);
      });
    });
  });

  describe('#fixUmlauts', () => {
    it('should replace ä with ae', () => {
      expect(Internet.fixUmlauts('ä')).to.eql('ae');
    });

    it('should replace ö with oe', () => {
      expect(Internet.fixUmlauts('ö')).to.eql('oe');
    });

    it('should replace ü with ue', () => {
      expect(Internet.fixUmlauts('ü')).to.eql('ue');
    });
  });

  describe('#domainWord', () => {
    it('should return a domainWord', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Internet.domainWord()).to.be.oneOf(nameData['lastNames']);
      });
    });
  });

  describe('#domainSuffix', () => {
    it('should return a domainSuffix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Internet.domainSuffix()).to.be.oneOf(data['domainSuffixes']);
      });
    });
  });

  describe('#ipV4_address', () => {
  });

  describe('#privateIpV4_address', () => {
  });

  describe('#publicIpV4_address', () => {
  });

  describe('#ipV4_cidr', () => {
  });

  describe('#ipV6_address', () => {
  });

  describe('#ipV6_cidr', () => {
  });

  describe('#macAddress', () => {
    it('should return a colon separated address', () => {
      expect(Internet.macAddress()).to.match(/\:/);
    });

    it('should contain no more than 6 separated values', () => {
      expect(Internet.macAddress().split(':')).to.have.lengthOf(6);
    });

    it('should have values that do not exceed 0xFF', () => {
      expect(Internet.macAddress().split(':').map(x => parseInt(x, 16)).sort((a, b) => a < b)[0]).to.be.below(0xFF);
    });
  });

  describe('#url', () => {
  });

  describe('#slug', () => {
  });
});
