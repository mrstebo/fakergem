import * as Name from './name';

export class Twitter {
  constructor(fakers) {
    this._fakers = fakers;
  }

  screenName() {
    return [
      this._fakers.Name.firstName(),
      this._fakers.Name.lastName()
    ].join('_').substring(0, 20).toLowerCase();
  }
}

export default new Twitter({
  Name
});
