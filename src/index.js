if (!global._babelPolyfill) { require('babel-polyfill'); }

import errors from 'feathers-errors';
import makeDebug from 'debug';

const debug = makeDebug('feathers-graphql');

class Service {
  constructor(options = {}) {
    this.options = options;
  }

  create(data) {
    return new Promise((resolve, reject) => {
      // Put some async code here.
      if (!data) {
        return reject(new errors.BadRequest());
      }

      resolve(data);
    });
  }
}

export default function init(options) {
  debug('Initializing feathers-graphql plugin');
  return new Service(options);
}

init.Service = Service;