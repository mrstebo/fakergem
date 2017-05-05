# Faker.Commerce

```js
Faker.Commerce.color() //=> "lavender"

// Optional arguments max=3, fixed_amount=false
Faker.Commerce.department() //=> "Grocery, Health & Beauty"
Faker.Commerce.department(5) //=> "Grocery, Books, Health & Beauty"
Faker.Commerce.department(2, true) //=> "Books & Tools"

Faker.Commerce.productName() //=> "Practical Granite Shirt"

Faker.Commerce.price() //=> "44.6"
Faker.Commerce.price({min: 20, max: 40}) //=> "32.16"

// Generate a random promotion code.
// Optional argument digits = 6 for number of random digits in suffix
Faker.Commerce.promotionCode() //=> "AmazingDeal829102"
```
