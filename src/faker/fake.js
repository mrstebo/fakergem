function parseModule(faker, match) {
  const v = match.replace(/[{}]/g, "").split(".");
  const module = v[0];
  const method = v[1];

  if (typeof faker[module] === "undefined") {
    throw new Error(`Invalid module: ${module}`);
  }

  if (typeof faker[module][method] === "undefined") {
    throw new Error(`Invalid method: ${module}.${method}`);
  }

  return faker[module][method]();
}

module.exports = class Fake {
  constructor(faker) {
    this.faker = faker;
  }

  f(str) {
    if (typeof str !== "string" || str.length === 0) {
      throw new Error("A string must be specified");
    }

    return str
      .replace(/\{(\w+)\.(\w+)\}/g, m => parseModule(this.faker, m))
      .replace(/#/g, () => this.faker.Number.between(0, 9));
  }
};
