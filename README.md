[![Build Status](https://travis-ci.org/mrstebo/fakergem.svg?branch=master)](https://travis-ci.org/mrstebo/fakergem)
[![npm version](https://badge.fury.io/js/fakergem.svg)](https://badge.fury.io/js/fakergem)
[![Coverage Status](https://coveralls.io/repos/github/mrstebo/fakergem/badge.svg?branch=master)](https://coveralls.io/github/mrstebo/fakergem?branch=master)

# fakergem
A javascript version of the Faker ruby gem

Contents
--------

- [Installing](#installing)
- [Usage](#usage)
  - [Faker.Address](doc/address.md)
  - [Faker.Ancient](doc/ancient.md)
  - [Faker.App](doc/app.md)
  - [Faker.Avatar](doc/avatar.md)
  - [Faker.Bank](doc/bank.md)
  - [Faker.Beer](doc/beer.md)
  - [Faker.Bitcoin](doc/bitcoin.md)
  - [Faker.Book](doc/book.md)
  - [Faker.Boolean](doc/boolean.md)
  - [Faker.Business](doc/business.md)
  - [Faker.Cat](doc/cat.md)
  - [Faker.ChuckNorris](doc/chuck_norris.md)
  - [Faker.Coffee](doc/coffee.md)
  - [Faker.Color](doc/color.md)
  - [Faker.Date](doc/date.md)
  - [Faker.Demographic](doc/demographic.md)
  - [Faker.DragonBall](doc/dragon_ball.md)
  - [Faker.Educator](doc/educator.md)
  - [Faker.File](doc/file.md)
  - [Faker.Food](doc/food.md)
  - [Faker.Friends](doc/friends.md)
  - [Faker.GameOfThrones](doc/game_of_thrones.md)
  - [Faker.Hacker](doc/hacker.md)
  - [Faker.HarryPotter](doc/harry_potter.md)
  - [Faker.LordOfTheRings](doc/lord_of_the_rings.md)
  - [Faker.Lorem](doc/lorem.md)
  - [Faker.LoremFlickr](doc/lorem_flickr.md)
  - [Faker.Matz](doc/matz.md)
  - [Faker.Music](doc/music.md)
  - [Faker.Name](doc/name.md)
  - [Faker.Number](doc/number.md)
  - [Faker.Placeholdit](doc/placeholdit.md)
  - [Faker.Pokemon](doc/pokemon.md)
  - [Faker.RickAndMorty](doc/rick_and_morty.md)
  - [Faker.RockBand](doc/rock_band.md)
  - [Faker.RuPaul](doc/ru_paul.md)
  - [Faker.SlackEmoji](doc/slack_emoji.md)
  - [Faker.Space](doc/space.md)
  - [Faker.StarWars](doc/star_wars.md)
  - [Faker.Superhero](doc/superhero.md)
  - [Faker.Team](doc/team.md)
  - [Faker.Time](doc/time.md)
  - [Faker.TwinPeaks](doc/twin_peaks.md)
  - [Faker.University](doc/university.md)
  - [Faker.Vehicle](doc/vehicle.md)
  - [Faker.Zelda](doc/zelda.md)

## Installing

```bash
npm install fakergem
```

## Usage

```js
const Faker = require('fakergem');

Faker.Number.number(2);      //=> 52
```
