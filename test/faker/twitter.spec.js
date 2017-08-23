'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonTest = require('sinon-test')(sinon, {useFakeTimers: false});
const Twitter = require('../../src/faker/twitter').default;

describe('Twitter', () => {
  describe('#user', () => {

  });

  describe('#status', () => {

  });

  describe('#screenName', () => {
    it('should contain a screen name separated by an underscore', sinonTest(function() {
      this.stub(Twitter._fakers.Name, 'firstName').callsFake(() => 'test');
      this.stub(Twitter._fakers.Name, 'lastName').callsFake(() => 'user');
      expect(Twitter.screenName()).to.equal('test_user');
    }));

    it('should convert name to lowercase', sinonTest(function() {
      this.stub(Twitter._fakers.Name, 'firstName').callsFake(() => 'Test');
      this.stub(Twitter._fakers.Name, 'lastName').callsFake(() => 'User');
      expect(Twitter.screenName()).to.equal('test_user');
    }));

    it('should not be longer than 20 characters', sinonTest(function() {
      this.stub(Twitter._fakers.Name, 'firstName').callsFake(() => 'XXXXXXXXXXXXXXX');
      this.stub(Twitter._fakers.Name, 'lastName').callsFake(() => 'XXXXXXXXXXXXXXX');
      expect(Twitter.screenName()).to.have.lengthOf(20);
    }));
  });
});
