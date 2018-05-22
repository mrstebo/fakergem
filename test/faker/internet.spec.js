'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Faker = require('../../src/faker');
const data = require('../../data/internet.json');

describe('Internet', () => {
  describe('#email', () => {
    it('should return an email address', sinonTest(function() {
      this.stub(Faker.Internet, 'userName').withArgs(undefined).returns('test-user');
      this.stub(Faker.Internet, 'domainName').returns('beef.com');
      expect(Faker.Internet.email()).to.eql('test-user@beef.com');
    }));
  });

  describe('#freeEmail', () => {
    it('should return a free email address', sinonTest(function() {
      this.stub(Faker.Internet, 'userName').withArgs(undefined).returns('test-user');
      this.stub(Faker.Random, 'element').withArgs(data['freeEmails']).returns('x.z');
      expect(Faker.Internet.freeEmail()).to.eql('test-user@x.z');
    }));
  });

  describe('#safeEmail', () => {
    it('should return a safe email address', sinonTest(function() {
      this.stub(Faker.Internet, 'userName').withArgs(undefined).returns('test-user');
      this.stub(Faker.Random, 'element').withArgs(['org', 'com', 'net']).returns('xyz');
      expect(Faker.Internet.safeEmail()).to.eql('test-user@example.xyz');
    }));
  });

  describe('#userName', () => {
    it('should return a username', sinonTest(function() {
      const randomStub = this.stub(Faker.Random, 'element');
      randomStub.withArgs(['.', '_']).returns('|');
      randomStub.withArgs(['John', 'John|Smith']).returns('username');
      this.stub(Faker.Name, 'firstName').returns('John');
      this.stub(Faker.Name, 'lastName').returns('Smith');
      expect(Faker.Internet.userName()).to.eql('username');
    }));

    it('should return a username with the specified specifier', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(['.', '_']).returns('|');
      this.stub(Faker.Random, 'assortment').withArgs(['I', 'am', 'a', 'user'], 4).returns(['I', 'am', 'a', 'user']);
      expect(Faker.Internet.userName('I am a user')).to.eql('i|am|a|user');
    }));

    it('should return a username with the specified separator', sinonTest(function() {
      this.stub(Faker.Random, 'assortment').withArgs(['test', 'user'], 2).returns(['test', 'user']);
      expect(Faker.Internet.userName('test user', ['#'])).to.eql('test#user');
    }));
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
    it('should return a domainName', sinonTest(function() {
      this.stub(Faker.Internet, 'domainWord').returns('d');
      this.stub(Faker.Internet, 'domainSuffix').returns('y');
      expect(Faker.Internet.domainName()).to.eql('d.y');
    }));
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

    it('should handle empty parameters', () => {
      expect(Faker.Internet.fixUmlauts()).to.eql('');
    });
  });

  describe('#domainWord', () => {
    it('should return a domainWord', sinonTest(function() {
      this.stub(Faker.Name, 'lastName').returns('domain');
      expect(Faker.Internet.domainWord()).to.eql('domain');
    }));
  });

  describe('#domainSuffix', () => {
    it('should return a domainSuffix', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(data['domainSuffixes']).returns('domain suffix');
      expect(Faker.Internet.domainSuffix()).to.eql('domain suffix');
    }));
  });

  describe('#ipV4Address', () => {
    it('should return an IPv4 address', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(2, 254).returns(12);
      expect(Faker.Internet.ipV4Address()).to.eql('12.12.12.12');
    }));
  });

  describe('#privateIPV4Address', () => {
    it('should return a private IPv4 address', sinonTest(function() {
      this.stub(Faker.Internet, 'ipV4Address').returns('10.1.2.3');
      expect(Faker.Internet.privateIPV4Address()).to.eql('10.1.2.3');
    }));

    it('should return only private IPv4 addresses', sinonTest(function() {
      this.stub(Faker.Internet, 'ipV4Address')
        .onFirstCall().returns('240.0.2.4')
        .onSecondCall().returns('192.168.0.1');
      expect(Faker.Internet.privateIPV4Address()).to.eql('192.168.0.1');
    }));
  });

  describe('#publicIPV4Address', () => {
    it('should return a public IPv4 address', sinonTest(function() {
      this.stub(Faker.Internet, 'ipV4Address').returns('11.0.0.1');
      expect(Faker.Internet.publicIPV4Address()).to.eq;('11.0.0.1');
    }));

    it('should only return public IPv4 addresses', sinonTest(function() {
      this.stub(Faker.Internet, 'ipV4Address')
        .onFirstCall().returns('10.0.0.1')
        .onSecondCall().returns('11.0.0.2');
      expect(Faker.Internet.publicIPV4Address()).to.eql('11.0.0.2');
    }));
  });

  describe('#ipV4CIDR', () => {
    it('should return a IPv4 Classless Inter-Domain Routing address', sinonTest(function() {
      this.stub(Faker.Internet, 'ipV4Address').returns('0.0.0.0');
      this.stub(Faker.Number, 'between').withArgs(1, 32).returns(24);
      expect(Faker.Internet.ipV4CIDR()).to.eql('0.0.0.0/24');
    }));
  });

  describe('#ipV6Address', () => {
    it('should return an IPv6 address', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(4096, 65535).returns(42745);
      expect(Faker.Internet.ipV6Address()).to.eql('a6f9:a6f9:a6f9:a6f9:a6f9:a6f9:a6f9:a6f9');
    }));
  });

  describe('#ipV6CIDR', () => {
    it('should return an IPv6 Classless Inter-Domain Routing address', sinonTest(function() {
      this.stub(Faker.Internet, 'ipV6Address').returns('12ab:12ab:12ab:12ab:12ab:12ab:12ab:12ab');
      this.stub(Faker.Number, 'between').withArgs(1, 128).returns(64);
      expect(Faker.Internet.ipV6CIDR()).to.eql('12ab:12ab:12ab:12ab:12ab:12ab:12ab:12ab/64');
    }));
  });

  describe('#macAddress', () => {
    it('should return a MAC address', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(0, 255).returns(212);
      expect(Faker.Internet.macAddress()).to.eql('d4:d4:d4:d4:d4:d4');
    }));

    it('should include a prefix if specified', sinonTest(function() {
      this.stub(Faker.Number, 'between').withArgs(0, 255).returns(201);
      expect(Faker.Internet.macAddress('ab:cd:ef')).to.eql('ab:cd:ef:c9:c9:c9');
    }));
  });

  describe('#url', () => {
    it('should return a URL', sinonTest(function() {
      this.stub(Faker.Internet, 'domainName').returns('abc.xyz')
      this.stub(Faker.Internet, 'userName').returns('username');
      expect(Faker.Internet.url()).to.eql('http://abc.xyz/username');
    }));

    it('should return a URL with the specified host', sinonTest(function() {
      this.stub(Faker.Internet, 'userName').returns('username');
      expect(Faker.Internet.url('custom.xyz')).to.eql('http://custom.xyz/username');
    }));

    it('should return a URL with the specified path', sinonTest(function() {
      expect(Faker.Internet.url('custom.xyz', '/path')).to.eql('http://custom.xyz/path');
    }));

    it('should return a URL with the specified scheme', () => {
      expect(Faker.Internet.url('custom.xyz', '/path', 'git')).to.eql('git://custom.xyz/path');
    });
  });

  describe('#slug', () => {
    it('should return a slug', sinonTest(function() {
      this.stub(Faker.Lorem, 'words').returns(['a', 'b']);
      this.stub(Faker.Random, 'element').withArgs(['-', '_', '.']).returns('|');
      expect(Faker.Internet.slug()).to.eql('a|b');
    }));

    it('should return slug with specified words', sinonTest(function() {
      this.stub(Faker.Random, 'element').withArgs(['-', '_', '.']).returns('|');
      expect(Faker.Internet.slug('test slug')).to.eql('test|slug');
    }));

    it('should return slug joined with the specified "glue"', () => {
      expect(Faker.Internet.slug('test slug', '#')).to.eql('test#slug');
    });

    it('should be all lowercase', () => {
      expect(Faker.Internet.slug('Test Slug', '#')).to.eql('test#slug');
    });
  });
});
