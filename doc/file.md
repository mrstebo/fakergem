# Faker.File

```js
Faker.File.extension() //=> "mp3"

Faker.File.mimeType() //=> "application/pdf"

// Optional arguments: dir, name, extension, directory_separator
Faker.File.fileName('path/to') //=> "path/to/something_random.jpg"
Faker.File.fileName('foo/bar', 'baz') //=> "foo/bar/baz.zip"
Faker.File.fileName('foo/bar', 'baz', 'doc') //=> "foo/bar/baz.doc"
Faker.File.fileName('foo/bar', 'baz', 'mp3', '\\') //=> "foo\bar\baz.mp3"
```
