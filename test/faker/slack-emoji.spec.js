'use strict';
const expect = require('chai').expect;
const SlackEmoji = require('../../src/faker/slack-emoji');
const data = require('../../data/slack-emoji.json');

describe('SlackEmoji', () => {
  describe('#people', () => {
    it('should return an emoji from the people category', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(SlackEmoji.people()).to.be.oneOf(data['people']);
      });
    });
  });

  describe('#nature', () => {
    it('should return an emoji from the nature category', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(SlackEmoji.nature()).to.be.oneOf(data['nature']);
      });
    });
  });

  describe('#foodAndDrink', () => {
    it('should return an emoji from the food and drink category', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(SlackEmoji.foodAndDrink()).to.be.oneOf(data['foodAndDrink']);
      });
    });
  });

  describe('#celebration', () => {
    it('should return an emoji from the celebration category', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(SlackEmoji.celebration()).to.be.oneOf(data['celebration']);
      });
    });
  });

  describe('#activity', () => {
    it('should return an emoji from the activity category', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(SlackEmoji.activity()).to.be.oneOf(data['activity']);
      });
    });
  });

  describe('#travelAndPlaces', () => {
    it('should return an emoji from the travel and places category', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(SlackEmoji.travelAndPlaces()).to.be.oneOf(data['travelAndPlaces']);
      });
    });
  });

  describe('#objectsAndSymbols', () => {
    it('should return an emoji from the objects and symbols category', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(SlackEmoji.objectsAndSymbols()).to.be.oneOf(data['objectsAndSymbols']);
      });
    });
  });

  describe('#custom', () => {
    it('should return an emoji from the custom category', () => {
      [...Array(100).keys()].forEach(_ => {
        expect(SlackEmoji.custom()).to.be.oneOf(data['custom']);
      });
    });
  });

  describe('#emoji', () => {
    it('should return an emoji from any category', () => {
      const emojis = [
        ...data['people'],
        ...data['nature'],
        ...data['foodAndDrink'],
        ...data['celebration'],
        ...data['activity'],
        ...data['travelAndPlaces'],
        ...data['objectsAndSymbols'],
        ...data['custom']
      ];
      [...Array(100).keys()].forEach(_ => {
        expect(SlackEmoji.emoji()).to.be.oneOf(emojis);
      });
    });
  });
});
