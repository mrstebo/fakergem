'use strict';
const expect = require('chai').expect;
const Space = require('../../src/faker/space');
const data = require('../../data/space.json');

describe('Space', () => {
  describe('#planet', () => {
    it('should return a planet', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Space.planet()).to.be.oneOf(data['planets']);
      });
    });
  });

  describe('#moon', () => {
    it('should return a moon', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Space.moon()).to.be.oneOf(data['moons']);
      });
    });
  });

  describe('#galaxy', () => {
    it('should return a galaxy', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Space.galaxy()).to.be.oneOf(data['galaxies']);
      });
    });
  });

  describe('#nebula', () => {
    it('should return a nebula', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Space.nebula()).to.be.oneOf(data['nebulas']);
      });
    });
  });

  describe('#starCluster', () => {
    it('should return a starCluster', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Space.starCluster()).to.be.oneOf(data['starClusters']);
      });
    });
  });

  describe('#constellation', () => {
    it('should return a constellation', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Space.constellation()).to.be.oneOf(data['constellations']);
      });
    });
  });

  describe('#star', () => {
    it('should return a star', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Space.star()).to.be.oneOf(data['stars']);
      });
    });
  });

  describe('#agency', () => {
    it('should return a agency', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Space.agency()).to.be.oneOf(data['agencies']);
      });
    });
  });

  describe('#agencyAbv', () => {
    it('should return a agencyAbv', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Space.agencyAbv()).to.be.oneOf(data['agencyAbvs']);
      });
    });
  });

  describe('#nasaSpaceCraft', () => {
    it('should return a nasaSpaceCraft', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Space.nasaSpaceCraft()).to.be.oneOf(data['nasaSpaceCrafts']);
      });
    });
  });

  describe('#company', () => {
    it('should return a company', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Space.company()).to.be.oneOf(data['companies']);
      });
    });
  });

  describe('#distanceMeasurement', () => {
    it('should return a distanceMeasurement', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Space.distanceMeasurement()).to.be.oneOf(data['distanceMeasurements']);
      });
    });
  });

  describe('#meteorite', () => {
    it('should return a meteorite', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Space.meteorite()).to.be.oneOf(data['meteorites']);
      });
    });
  });
});
