'use strict';
const expect = require('chai').expect;
const Faker = require('../../src/faker');
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
    it('should return a username', () => {
      expect(Faker.Internet.userName()).to.match(/^\w+(?:(\.|\_)\w+)?$/);
    });

    it('should return a username based off the specifier', () => {
      const userName = Faker.Internet.userName('test user');
      expect(userName).to.match(/test/);
      expect(userName).to.match(/user/);
      expect(userName).to.match(/\w+(\.|\_)\w+/);
    });

    it('should return a username with the specified separator', () => {
      expect(Faker.Internet.userName('test user', ['#'])).to.match(/\w+\#\w+/);
    });
  });

  describe('#password', () => {
    it('should return a password', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Internet.password()).to.match(/^[a-zA-Z0-9]+$/);
      });
    });

    it('should return a password between 8 and 16 alphanumeric characters by default', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Internet.password()).to.match(/^[a-zA-Z0-9]{8,16}$/);
      });
    });

    it('should return a lowercase password when mixCase is false', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Internet.password(8, 16, false)).to.match(/^[a-z0-9]+$/);
      });
    });

    it('should return a password with special characters when specialChars is true', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Internet.password(128, 128, true, true)).to.match(/[\!\@\#\$\%\^\&\*]/);
      });
    });
  });

  describe('#domainName', () => {
    it('should return a domainName', () => {
      [...Array(100).keys()].forEach(_ => {
        const domainName = Faker.Internet.domainName();
        expect(domainName.split('.')[0]).to.be.oneOf(nameData['lastNames']);
        expect(domainName.split('.')[1]).to.be.oneOf(data['domainSuffixes']);
      });
    });
  });

  describe('#fixUmlauts', () => {
    it('should replace ä with ae', () => {
      expect(Faker.Internet.fixUmlauts('ä')).to.eql('ae');
    });

    it('should replace ö with oe', () => {
      expect(Faker.Internet.fixUmlauts('ö')).to.eql('oe');
    });

    it('should replace ü with ue', () => {
      expect(Faker.Internet.fixUmlauts('ü')).to.eql('ue');
    });
  });

  describe('#domainWord', () => {
    it('should return a domainWord', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Internet.domainWord()).to.be.oneOf(nameData['lastNames']);
      });
    });
  });

  describe('#domainSuffix', () => {
    it('should return a domainSuffix', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Internet.domainSuffix()).to.be.oneOf(data['domainSuffixes']);
      });
    });
  });

  describe('#ipV4Address', () => {
    it('should return an IPv4 address', () => {
      [...Array(100).keys()].forEach(_ => {
        const addr = Faker.Internet.ipV4Address();
        const octets = addr.split('.').map(x => parseInt(x));
        expect(addr).to.match(/^\d+\.\d+\.\d+\.\d+$/);
        expect(Math.max(...octets)).to.be.below(255);
      });
    });
  });

  describe('#privateIPV4Address', () => {
    it('should return a private IPv4 address', () => {
      const regexps = [
        /^10\./,                                       // 10.0.0.0    – 10.255.255.255
        /^100\.(6[4-9]|[7-9]\d|1[0-1]\d|12[0-7])\./,   // 100.64.0.0  – 100.127.255.255
        /^127\./,                                      // 127.0.0.0   – 127.255.255.255
        /^169\.254\./,                                 // 169.254.0.0 – 169.254.255.255
        /^172\.(1[6-9]|2\d|3[0-1])\./,                 // 172.16.0.0  – 172.31.255.255
        /^192\.0\.0\./,                                // 192.0.0.0   – 192.0.0.255
        /^192\.168\./,                                 // 192.168.0.0 – 192.168.255.255
        /^198\.(1[8-9])\./                             // 198.18.0.0  – 198.19.255.255
      ];
      const expected = new RegExp(regexps.map(x => `(${x.source})`).join('|'));
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Internet.privateIPV4Address()).to.match(expected);
      });
    });
  });

  describe('#publicIPV4Address', () => {
    it('should return a public IPv4 address', () => {
      const privateRegexps = [
        /^10\./,                                       // 10.0.0.0    – 10.255.255.255
        /^100\.(6[4-9]|[7-9]\d|1[0-1]\d|12[0-7])\./,   // 100.64.0.0  – 100.127.255.255
        /^127\./,                                      // 127.0.0.0   – 127.255.255.255
        /^169\.254\./,                                 // 169.254.0.0 – 169.254.255.255
        /^172\.(1[6-9]|2\d|3[0-1])\./,                 // 172.16.0.0  – 172.31.255.255
        /^192\.0\.0\./,                                // 192.0.0.0   – 192.0.0.255
        /^192\.168\./,                                 // 192.168.0.0 – 192.168.255.255
        /^198\.(1[8-9])\./                             // 198.18.0.0  – 198.19.255.255
      ];
      const reservedRegexps = [
        /^0\./,                 // 0.0.0.0      – 0.255.255.255
        /^192\.0\.2\./,         // 192.0.2.0    – 192.0.2.255
        /^192\.88\.99\./,       // 192.88.99.0  – 192.88.99.255
        /^198\.51\.100\./,      // 198.51.100.0 – 198.51.100.255
        /^203\.0\.113\./,       // 203.0.113.0  – 203.0.113.255
        /^(22[4-9]|23\d)\./,    // 224.0.0.0    – 239.255.255.255
        /^(24\d|25[0-5])\./     // 240.0.0.0    – 255.255.255.254  and  255.255.255.255
      ];
      [...Array(100).keys()].forEach(_ => {
        const addr = Faker.Internet.publicIPV4Address();
        privateRegexps.forEach(regexp => expect(addr).not.to.match(regexp));
        reservedRegexps.forEach(regexp => expect(addr).not.to.match(regexp));
      });
    });
  });

  describe('#ipV4CIDR', () => {
    it('should return a IPv4 Classless Inter-Domain Routing address', () => {
      [...Array(100).keys()].forEach(_ => {
        const addr = Faker.Internet.ipV4CIDR();
        expect(addr).to.match(/\/\d{1,2}$/);
        expect(parseInt(addr.split('/')[1])).to.be.within(1, 32);
      });
    });
  });

  describe('#ipV6Address', () => {
    [...Array(100).keys()].forEach(_ => {
      expect(Faker.Internet.ipV6Address()).to.match(/^[0-9a-f]{4}:[0-9a-f]{4}:[0-9a-f]{4}:[0-9a-f]{4}:[0-9a-f]{4}:[0-9a-f]{4}:[0-9a-f]{4}:[0-9a-f]{4}$/);
    });
  });

  describe('#ipV6CIDR', () => {
    [...Array(100).keys()].forEach(_ => {
      const addr = Faker.Internet.ipV6CIDR();
      expect(addr).to.match(/\/\d{1,3}$/);
      expect(parseInt(addr.split('/')[1])).to.be.within(1, 128);
    });
  });

  describe('#macAddress', () => {
    it('should return a colon separated address', () => {
      expect(Faker.Internet.macAddress()).to.match(/\:/);
    });

    it('should contain no more than 6 separated values', () => {
      expect(Faker.Internet.macAddress().split(':')).to.have.lengthOf(6);
    });

    it('should have values that do not exceed 0xFF', () => {
      expect(Faker.Internet.macAddress().split(':').map(x => parseInt(x, 16)).sort((a, b) => a < b)[0]).to.be.below(0xFF);
    });
  });

  describe('#url', () => {
    it('should return a URL', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Internet.url()).to.match(/^http:\/\/.+\/.+$/);
      });
    });

    it('should return a URL with the specified host', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Internet.url('myhost')).to.match(/^http:\/\/myhost\/.+$/);
      });
    });

    it('should return a URL with the specified path', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Internet.url('myhost', '/mypath')).to.match(/^http:\/\/.+\/mypath$/);
      });
    });

    it('should return a URL with the specified scheme', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Faker.Internet.url('myhost', '/mypath', 'git')).to.match(/^git:\/\/.+\/.+$/);
      });
    });
  });

  describe('#slug', () => {
    it('should return a slug when no parameters are specified', () => {
      expect(Faker.Internet.slug()).to.match(/^\w+(\-|\_|\.)\w+$/);
    });

    it('should return slug with specified words', () => {
      expect(Faker.Internet.slug('test slug')).to.match(/^test(\-|\_|\.)slug$/);
    });

    it('should return slug joined with the specified "glue"', () => {
      expect(Faker.Internet.slug(null, '#')).to.match(/^\w+\#\w+$/);
    });

    it('should be all lowercase', () => {
      expect(Faker.Internet.slug()).to.match(/^[a-z]+.[a-z]+$/)
    });
  });
});
