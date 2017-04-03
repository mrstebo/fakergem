[![Build Status](https://travis-ci.org/mrstebo/fakergem.svg?branch=master)](https://travis-ci.org/mrstebo/fakergem)
[![npm version](https://badge.fury.io/js/fakergem.svg)](https://badge.fury.io/js/fakergem)

# fakergem
A javascript version of the Faker ruby gem

Contents
--------

- [Installing](#installing)
- [Usage](#usage)
  - [Faker.Boolean](doc/boolean.md)
  - [Faker.Color](doc/color.md)
  - [Faker.LoremFlickr](doc/lorem_flickr.md)
  - [Faker.Number](doc/number.md)
  - [Faker.Placeholdit](doc/placeholdit.md)

## Installing

```bash
npm install fakergem
```

## Usage

```js
const Faker = require('fakergem');

Faker.Number.number(2);      //=> 52
```
