'use strict';
const EventEmitter = require('events');
const error = new EventEmitter();
const saved = new EventEmitter();


module.exports={error,saved}