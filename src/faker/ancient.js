const data = require("../../data/ancient.json");

module.exports =  class Ancient {
  constructor(faker) {
    this.faker = faker;
  }

  god() {
    return this.faker.Random.element(data["gods"]);
  }

  primordial() {
    return this.faker.Random.element(data["primordials"]);
  }

  titan() {
    return this.faker.Random.element(data["titans"]);
  }

  hero() {
    return this.faker.Random.element(data["heroes"]);
  }
};
