import {expect} from 'chai';
import * as Placeholdit from '../../lib/faker/placeholdit';

describe('Placeholdit', () => {
  describe('#image', () => {
    it('should return default placeholdit URL', () => {
      expect(Placeholdit.image()).to.equal('https://placehold.it/300x300.png');
    });
    it('should return URL with specified size', () => {
      expect(Placeholdit.image('100x120')).to.equal('https://placehold.it/100x120.png');
    });
    it('should return URL with specified file format', () => {
      ['png', 'jpg', 'gif', 'jpeg'].forEach(format => {
        expect(Placeholdit.image('300x300', format)).to.equal(`https://placehold.it/300x300.${format}`);
      });
    });
    it('should return URL with specified background color', () => {
      ['000000', 'ffffff', '000', 'fff'].forEach(color => {
        expect(Placeholdit.image('300x300', 'png', color)).to.equal(`https://placehold.it/300x300.png/${color}`);
      });
    });
    it('should return URL with specified text color', () => {
      ['000000', 'ffffff', '000', 'fff'].forEach(color => {
        expect(Placeholdit.image('300x300', 'png', 'fff', color)).to.equal(`https://placehold.it/300x300.png/fff/${color}`);
      });
    });
    it('should return URL with specified text', () => {
      expect(Placeholdit.image('300x300', 'png', 'fff', 'fff', 'test')).to.equal('https://placehold.it/300x300.png/fff/fff?text=test');
    });
    it('should throw if size is not in a valid format', () => {
      ['100', 'abc', '2x2x2'].forEach(size => {
        expect(() => Placeholdit.image(size)).to.throw();
      });
    });
    it('should throw if format is not supported', () => {
      ['txt', 'pdf', 'dat', 'x'].forEach(format => {
        expect(() => Placeholdit.image('300x300', format)).to.throw();
      });
    });
    it('should throw if background color contains #', () => {
      ['#000', '#fff', '#000000', '#ffffff'].forEach(color => {
        expect(() => Placeholdit.image('300x300', 'png', color)).to.throw();
      });
    });
    it('should throw if background color is invalid', () => {
      ['ggg', '1fg', 'xxa'].forEach(color => {
        expect(() => Placeholdit.image('300x300', 'png', color)).to.throw();
      });
    });
    it('should throw if text color contains #', () => {
      ['#000', '#fff', '#000000', '#ffffff'].forEach(color => {
        expect(() => Placeholdit.image('300x300', 'png', 'fff', color)).to.throw();
      });
    });
    it('should throw if text color is invalid', () => {
      ['ggg', '1fg', 'xxa'].forEach(color => {
        expect(() => Placeholdit.image('300x300', 'png', 'fff', color)).to.throw();
      });
    });
  });
});
