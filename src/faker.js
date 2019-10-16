const Address = require("./faker/address");
const Ancient = require("./faker/ancient");
const App = require("./faker/app");
const Avatar = require("./faker/avatar");
const Bank = require("./faker/bank");
const Beer = require("./faker/beer");
const Bitcoin = require("./faker/bitcoin");
const Book = require("./faker/book");
const Boolean = require("./faker/boolean");
const Business = require("./faker/business");
const Cat = require("./faker/cat");
const ChuckNorris = require("./faker/chuck-norris");
const Coffee = require("./faker/coffee");
const Color = require("./faker/color");
const Commerce = require("./faker/commerce");
const Company = require("./faker/company");
const Compass = require("./faker/compass");
const Crypto = require("./faker/crypto");
const DateFaker = require("./faker/date");
const Demographic = require("./faker/demographic");
const DragonBall = require("./faker/dragon-ball");
const Educator = require("./faker/educator");
const Fake = require("./faker/fake");
const File = require("./faker/file");
const Fillmurray = require("./faker/fillmurray");
const Food = require("./faker/food");
const Friends = require("./faker/friends");
const GameOfThrones = require("./faker/game-of-thrones");
const Hacker = require("./faker/hacker");
const HarryPotter = require("./faker/harry-potter");
const Hipster = require("./faker/hipster");
const Internet = require("./faker/internet");
const LordOfTheRings = require("./faker/lord-of-the-rings");
const LoremFlickr = require("./faker/lorem-flickr");
const LoremPixel = require("./faker/lorem-pixel");
const Lorem = require("./faker/lorem");
const Matz = require("./faker/matz");
const Music = require("./faker/music");
const Name = require("./faker/name");
const Number = require("./faker/number");
const PhoneNumber = require("./faker/phone-number");
const Placeholdit = require("./faker/placeholdit");
const Pokemon = require("./faker/pokemon");
const Random = require("./faker/random");
const RickAndMorty = require("./faker/rick-and-morty");
const RockBand = require("./faker/rock-band");
const RuPaul = require("./faker/ru-paul");
const SlackEmoji = require("./faker/slack-emoji");
const Space = require("./faker/space");
const StarWars = require("./faker/star-wars");
const Superhero = require("./faker/superhero");
const Team = require("./faker/team");
const Time = require("./faker/time");
const TwinPeaks = require("./faker/twin-peaks");
const Twitter = require("./faker/twitter");
const University = require("./faker/university");
const Vehicle = require("./faker/vehicle");
const Zelda = require("./faker/zelda");

module.exports = class Faker {

  constructor() {
    this.Address = new Address(this);
    this.Ancient = new Ancient(this);
    this.App = new App(this);
    this.Avatar = new Avatar(this);
    this.Bank = new Bank(this);
    this.Beer = new Beer(this);
    this.Bitcoin = new Bitcoin(this);
    this.Book = new Book(this);
    this.Boolean = new Boolean(this);
    this.Business = new Business(this);
    this.Cat = new Cat(this);
    this.ChuckNorris = new ChuckNorris(this);
    this.Coffee = new Coffee(this);
    this.Color = new Color(this);
    this.Commerce = new Commerce(this);
    this.Company = new Company(this);
    this.Compass = new Compass(this);
    this.Crypto = new Crypto(this);
    this.Date = new DateFaker(this);
    this.Demographic = new Demographic(this);
    this.DragonBall = new DragonBall(this);
    this.Educator = new Educator(this);
    this.Fake = new Fake(this);
    this.File = new File(this);
    this.Fillmurray = new Fillmurray(this);
    this.Food = new Food(this);
    this.Friends = new Friends(this);
    this.GameOfThrones = new GameOfThrones(this);
    this.Hacker = new Hacker(this);
    this.HarryPotter = new HarryPotter(this);
    this.Hipster = new Hipster(this);
    this.Internet = new Internet(this);
    this.LordOfTheRings = new LordOfTheRings(this);
    this.LoremFlickr = new LoremFlickr(this);
    this.LoremPixel = new LoremPixel(this);
    this.Lorem = new Lorem(this);
    this.Matz = new Matz(this);
    this.Music = new Music(this);
    this.Name = new Name(this);
    this.Number = new Number(this);
    this.PhoneNumber = new PhoneNumber(this);
    this.Placeholdit = new Placeholdit(this);
    this.Pokemon = new Pokemon(this);
    this.Random = new Random(this);
    this.RickAndMorty = new RickAndMorty(this);
    this.RockBand = new RockBand(this);
    this.RuPaul = new RuPaul(this);
    this.SlackEmoji = new SlackEmoji(this);
    this.Space = new Space(this);
    this.StarWars = new StarWars(this);
    this.Superhero = new Superhero(this);
    this.Team = new Team(this);
    this.Time = new Time(this);
    this.TwinPeaks = new TwinPeaks(this);
    this.Twitter = new Twitter(this);
    this.University = new University(this);
    this.Vehicle = new Vehicle(this);
    this.Zelda = new Zelda(this);
  }

};
