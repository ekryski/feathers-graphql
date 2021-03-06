# feathers-graphql

[![Build Status](https://travis-ci.org/feathersjs/feathers-graphql.png?branch=master)](https://travis-ci.org/feathersjs/feathers-graphql)

> A GraphQL adapter for Feathers

# This is experimental and a work in progress. You did not see this. This repo does not exist :wink:.

## Installation

```
npm install feathers-authentication --save
```

## Documentation

Please refer to the [feathers-graphql documentation](http://docs.feathersjs.com/) for more details.

## Complete Example

Here's an example of a Feathers server that uses `feathers-graphql`. 

```js
const feathers = require('feathers');
const rest = require('feathers-rest');
const hooks = require('feathers-hooks');
const bodyParser = require('body-parser');
const errorHandler = require('feathers-errors/handler');
const plugin = require('feathers-graphql');

// Initialize the application
const app = feathers()
  .configure(rest())
  .configure(hooks())
  // Needed for parsing bodies (login)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Initialize your feathers plugin
  .use('/plugin', plugin())
  .use(errorHandler());

app.listen(3030);

console.log('Feathers app started on 127.0.0.1:3030');
```


## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2015

Licensed under the [MIT license](LICENSE).
