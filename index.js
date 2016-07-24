'use strict';

var util = require('util');
var wrapi = require('wrapi');

var endpoints = require('./api/pokeapi.json');

function pokeWrapi() {

  var opts = {
    headers: {
      'User-Agent': 'pokemon-wrapi'
    }
  };

  pokeWrapi.super_.call(this,
            'http://pokeapi.co/api/v2/',
            endpoints,
            opts);  
};

util.inherits(pokeWrapi, wrapi);
module.exports = pokeWrapi;
