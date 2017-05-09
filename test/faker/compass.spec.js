'use strict';
const expect = require('chai').expect;
const Compass = require('../../src/faker/compass');
const data = require('../../data/compass.json');

describe('Compass', () => {
  describe('#direction', () => {
    it('should return a direction', () => {
      const directions = [
        ...data['cardinals']['word'],
        ...data['ordinals']['word'],
        ...data['halfWinds']['word'],
        ...data['quarterWinds']['word']
      ];
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.direction()).to.be.oneOf(directions);
      });
    });

    it('should replace placeholders', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.direction()).not.to.match(/#\{\w+\}/);
      });
    });
  });

  describe('#cardinal', () => {
    it('should return a cardinal', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.cardinal()).to.be.oneOf(data['cardinals']['word']);
      });
    });
  });

  describe('#ordinal', () => {
    it('should return a ordinal', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.ordinal()).to.be.oneOf(data['ordinals']['word']);
      });
    });
  });

  describe('#halfWind', () => {
    it('should return a halfWind', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.halfWind()).to.be.oneOf(data['halfWinds']['word']);
      });
    });
  });

  describe('#quarterWind', () => {
    it('should return a quarterWind', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.quarterWind()).to.be.oneOf(data['quarterWinds']['word']);
      });
    });
  });

  describe('#abbreviation', () => {
    it('should return a abbreviation', () => {
      const abbreviations = [
        ...data['cardinals']['abbreviation'],
        ...data['ordinals']['abbreviation'],
        ...data['halfWinds']['abbreviation'],
        ...data['quarterWinds']['abbreviation']
      ];
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.abbreviation()).to.be.oneOf(abbreviations);
      });
    });

    it('should replace placeholders', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.abbreviation()).not.to.match(/#\{\w+\}/);
      });
    });
  });

  describe('#cardinalAbbreviation', () => {
    it('should return a cardinalAbbreviation', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.cardinalAbbreviation()).to.be.oneOf(data['cardinals']['abbreviation']);
      });
    });
  });

  describe('#ordinalAbbreviation', () => {
    it('should return a ordinalAbbreviation', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.ordinalAbbreviation()).to.be.oneOf(data['ordinals']['abbreviation']);
      });
    });
  });

  describe('#halfWindAbbreviation', () => {
    it('should return a halfWindAbbreviation', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.halfWindAbbreviation()).to.be.oneOf(data['halfWinds']['abbreviation']);
      });
    });
  });

  describe('#quarterWindAbbreviation', () => {
    it('should return a quarterWindAbbreviation', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.quarterWindAbbreviation()).to.be.oneOf(data['quarterWinds']['abbreviation']);
      });
    });
  });

  describe('#azimuth', () => {
    it('should return a azimuth', () => {
      const azimuths = [
        ...data['cardinals']['azimuth'],
        ...data['ordinals']['azimuth'],
        ...data['halfWinds']['azimuth'],
        ...data['quarterWinds']['azimuth']
      ];
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.azimuth()).to.be.oneOf(azimuths);
      });
    });

    it('should replace placeholders', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.azimuth()).not.to.match(/#\{\w+\}/);
      });
    });
  });

  describe('#cardinalAzimuth', () => {
    it('should return a cardinalAzimuth', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.cardinalAzimuth()).to.be.oneOf(data['cardinals']['azimuth']);
      });
    });
  });

  describe('#ordinalAzimuth', () => {
    it('should return a ordinalAzimuth', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.ordinalAzimuth()).to.be.oneOf(data['ordinals']['azimuth']);
      });
    });
  });

  describe('#halfWindAzimuth', () => {
    it('should return a halfWindAzimuth', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.halfWindAzimuth()).to.be.oneOf(data['halfWinds']['azimuth']);
      });
    });
  });

  describe('#quarterWindAzimuth', () => {
    it('should return a quarterWindAzimuth', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(Compass.quarterWindAzimuth()).to.be.oneOf(data['quarterWinds']['azimuth']);
      });
    });
  });
});
