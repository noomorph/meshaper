/// <reference path="../../../typings/lodash/lodash.d.ts" />

import _ = require('lodash');
import HebrewMatrix = require('./matrix');
import codes = require('./codes');

var chars = Object.freeze(_.mapValues(codes, code => {
    return String.fromCharCode(code);
})) as Object;

export = (chars as HebrewMatrix<string>);
