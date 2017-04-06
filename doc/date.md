# Faker.Date

```js
// Random date between dates
Faker.Date.between(new Date(2014, 8, 1), new Date(2014, 8, 30)) //=> "Wed, 24 Sep 2014"

// Random date between dates except for certain date
Faker.Date.betweenExcept(new Date(2014, 0, 1), new Date(2015, 0, 1), new Date()) //=> "Wed, 24 Sep 2014"

// Random date in the future (up to maximum of N days)
Faker.Date.forward(23) //=> "Fri, 03 Oct 2014"

// Random date in the past (up to maximum of N days)
Faker.Date.backward(14) //=> "Fri, 19 Sep 2014"

// Random birthday date (maximum age between 18 and 65)
Faker.Date.birthday(18, 65) //=> "Fri, 28 Mar 1986"
```
