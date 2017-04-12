# feathers-graphql

[![Greenkeeper badge](https://badges.greenkeeper.io/feathersjs/feathers-graphql.svg?token=7cf11d2e419ede6c41b5c707a0e80d22f81a336ca6eb19c2494b4565048e64a7)](https://greenkeeper.io/)

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
