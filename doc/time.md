# Faker.Time

```js
// Random date between dates
Faker.Time.between(new Date(2014, 9, 1), new Date(2014, 9, 30)) //=> "2014-09-18 12:30:59 -0700"

// Random date between dates (within specified part of the day)
Faker.Time.between(new Date(2014, 9, 1), new Date(2014, 9, 30), Faker.Time.ALL) //=> "2014-09-19 07:03:30 -0700"
Faker.Time.between(new Date(2014, 9, 1), new Date(2014, 9, 30), Faker.Time.DAY) //=> "2014-09-18 16:28:13 -0700"
Faker.Time.between(new Date(2014, 9, 1), new Date(2014, 9, 30), Faker.Time.NIGHT) //=> "2014-09-20 19:39:38 -0700"
Faker.Time.between(new Date(2014, 9, 1), new Date(2014, 9, 30), Faker.Time.MORNING) //=> "2014-09-19 08:07:52 -0700"
Faker.Time.between(new Date(2014, 9, 1), new Date(2014, 9, 30), Faker.Time.AFTERNOON) //=> "2014-09-18 12:10:34 -0700"
Faker.Time.between(new Date(2014, 9, 1), new Date(2014, 9, 30), Faker.Time.EVENING) //=> "2014-09-19 20:21:03 -0700"
Faker.Time.between(new Date(2014, 9, 1), new Date(2014, 9, 30), Faker.Time.MIDNIGHT) //=> "2014-09-20 00:40:14 -0700"

// Random time in the future (up to maximum of N days)
Faker.Time.forward(23, Faker.Time.MORNING) //=> "2014-09-26 06:54:47 -0700"

// Random time in the past (up to maximum of N days)
Faker.Time.backward(14, Faker.Time.EVENING) //=> "2014-09-17 19:56:33 -0700"
```
