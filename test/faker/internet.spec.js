'use strict';
const expect = require('chai').expect;
const Internet = require('../../src/faker/internet');
const data = require('../../data/internet.json');
const nameData = require('../../data/name.json');

describe('Internet', () => {
  describe('#email', () => {
    it('should return a email', () => {
      [...Array(100).keys()].forEach(_ => {
        // expect(Internet.email()).to.be.oneOf(data['emails']);
      });
    });
  });

  describe('#freeEmail', () => {
    it('should return a freeEmail', () => {
      [...Array(100).keys()].forEach(_ => {
        // expect(Internet.freeEmail()).to.be.oneOf(data['freeEmails']);
      });
    });
  });

  describe('#safeEmail', () => {
    it('should return a safeEmail', () => {
      [...Array(100).keys()].forEach(_ => {
        // expect(Internet.safeEmail()).to.be.oneOf(data['safeEmails']);
      });
    });
  });

  describe('#userName', () => {
    it('should return a userName', () => {
      [...Array(100).keys()].forEach(_ => {
        // expect(Internet.userName()).to.be.oneOf(data['userNames']);
      });
    });
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
    it('should return a ipV4_address', () => {
      [...Array(100).keys()].forEach(_ => {
        // expect(Internet.ipV4_address()).to.be.oneOf(data['ipV4_addresses']);
      });
    });
  });

  describe('#privateIpV4_address', () => {
    it('should return a privateIpV4_address', () => {
      [...Array(100).keys()].forEach(_ => {
        // expect(Internet.privateIpV4_address()).to.be.oneOf(data['privateIpV4_addresses']);
      });
    });
  });

  describe('#publicIpV4_address', () => {
    it('should return a publicIpV4_address', () => {
      [...Array(100).keys()].forEach(_ => {
        // expect(Internet.publicIpV4_address()).to.be.oneOf(data['publicIpV4_addresses']);
      });
    });
  });

  describe('#ipV4_cidr', () => {
    it('should return a ipV4_cidr', () => {
      [...Array(100).keys()].forEach(_ => {
        // expect(Internet.ipV4_cidr()).to.be.oneOf(data['ipV4_cidrs']);
      });
    });
  });

  describe('#ipV6_address', () => {
    it('should return a ipV6_address', () => {
      [...Array(100).keys()].forEach(_ => {
        // expect(Internet.ipV6_address()).to.be.oneOf(data['ipV6_addresses']);
      });
    });
  });

  describe('#ipV6_cidr', () => {
    it('should return a ipV6_cidr', () => {
      [...Array(100).keys()].forEach(_ => {
        // expect(Internet.ipV6_cidr()).to.be.oneOf(data['ipV6_cidrs']);
      });
    });
  });

  describe('#macAddress', () => {
    it('should return a macAddress', () => {
      [...Array(100).keys()].forEach(_ => {
        // expect(Internet.macAddress()).to.be.oneOf(data['macAddresses']);
      });
    });
  });

  describe('#url', () => {
    it('should return a url', () => {
      [...Array(100).keys()].forEach(_ => {
        // expect(Internet.url()).to.be.oneOf(data['urls']);
      });
    });
  });

  describe('#slug', () => {
    it('should return a slug', () => {
      [...Array(100).keys()].forEach(_ => {
        // expect(Internet.slug()).to.be.oneOf(data['slugs']);
      });
    });
  });
});
