
var config = require('./config');
var Voicer = require('voicer');

var voicer = new Voicer(config);
voicer.start();