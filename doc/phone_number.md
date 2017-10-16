# Faker.PhoneNumber

Phone numbers may be in any of the following formats:

  * 333-333-3333
  * (333) 333-3333
  * 1-333-333-3333
  * 333.333.3333
  * 333-333-3333
  * 333-333-3333 x3333
  * (333) 333-3333 x3333
  * 1-333-333-3333 x3333
  * 333.333.3333 x3333

(Don't let the example output below fool you - any format can be returned at random.)

```js
Faker.PhoneNumber.phoneNumber() //=> "397.693.1309"

Faker.PhoneNumber.cellPhone() //=> "(186)285-7925"

// US only
Faker.PhoneNumber.areaCode() //=> "201"

// US only
Faker.PhoneNumber.exchangeCode() //=> "208"

// Optional parameter: length=4
Faker.PhoneNumber.subscriberNumber() //=> "3873"

Faker.PhoneNumber.subscriberNumber(2) //=> "39"

Faker.PhoneNumber.extension() //=> "3764"
```
