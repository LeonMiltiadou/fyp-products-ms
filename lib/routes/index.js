"use strict";

var routes = require('express').Router();

var productroutes = require('./products');

routes.use('/product', productroutes);
module.exports = routes;