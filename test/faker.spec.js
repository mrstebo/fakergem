import {expect} from 'chai';
import Faker from '../lib/faker';

describe('#Faker', () => {
  it('should be an object', () => {
    expect(Faker).to.be.a('object');
  });
});
