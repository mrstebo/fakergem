# Faker.Internet

```js
// Optional argument name=nil
Faker.Internet.email() //=> "eliza@mann.net"

Faker.Internet.email('Nancy') //=> "nancy@terry.biz"

// Optional argument name=nil
Faker.Internet.freeEmail() //=> "freddy@gmail.com"

Faker.Internet.freeEmail('Nancy') //=> "nancy@yahoo.com"

// Optional argument name=nil
Faker.Internet.safeEmail() //=> "christelle@example.org"

Faker.Internet.safeEmail('Nancy') //=> "nancy@example.net"

// Optional arguments specifier=nil, separators=%w(. _)
Faker.Internet.userName() //=> "alexie"

Faker.Internet.userName('Nancy') //=> "nancy"

Faker.Internet.userName('Nancy Johnson', %w(. _ -)) //=> "johnson-nancy"

// Optional arguments: min_length=5, max_length=8
Faker.Internet.userName(5..8)

// Optional arguments: min_length=8, max_length=16
Faker.Internet.password() //=> "vg5msvy1uerg7"

Faker.Internet.password(8) //=> "yfgjik0hgzdqs0"

Faker.Internet.password(10, 20) //=> "eoc9shwd1hwq4vbgfw"

Faker.Internet.password(10, 20, true) //=> "3k5qS15aNmG"

Faker.Internet.password(10, 20, true, true) //=> "*%NkOnJsH4"

Faker.Internet.domainName() //=> "effertz.info"

Faker.Internet.fixUmlauts('äöüß') //=> "aeoeuess"

Faker.Internet.domainWord() //=> "haleyziemann"

Faker.Internet.domainSuffix() //=> "info"

Faker.Internet.ipV4Address() //=> "24.29.18.175"

// Private IP range according to RFC 1918 and 127.0.0.0/8 and 169.254.0.0/16.
Faker.Internet.privateIPV4Address() //=> "10.0.0.1"

// Guaranteed not to be in the ip range from the private_ip_v4_address method.
Faker.Internet.publicIPV4Address() //=> "24.29.18.175"

Faker.Internet.ipV4CIDR() //=> "24.29.18.175/21"

Faker.Internet.ipV6Address() //=> "ac5f:d696:3807:1d72:2eb5:4e81:7d2b:e1df"

Faker.Internet.ipV6CIDR() //=> "ac5f:d696:3807:1d72:2eb5:4e81:7d2b:e1df/78"

// Optional argument prefix=''
Faker.Internet.macAddress() //=> "e6:0d:00:11:ed:4f"
Faker.Internet.macAddress('55:44:33') //=> "55:44:33:02:1d:9b"

// Optional arguments: host=domain_name, path="/#{user_name}"
Faker.Internet.url() //=> "http://thiel.com/chauncey_simonis"
Faker.Internet.url('example.com') //=> "http://example.com/clotilde.swift"
Faker.Internet.url('example.com', '/foobar.html') //=> "http://example.com/foobar.html"

// Optional arguments: words=nil, glue=nil
Faker.Internet.slug() //=> "pariatur_laudantium"
Faker.Internet.slug('foo bar') //=> "foo.bar"
Faker.Internet.slug('foo bar', '-') //=> "foo-bar"
```
