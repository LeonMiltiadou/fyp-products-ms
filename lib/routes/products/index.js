"use strict";

var productroutes = require('express').Router();

var getproduct = require('./getProduct');

var listAllProducts = require('./listAllProducts');

productroutes.get('/get', listAllProducts);
productroutes.get('/get/:productID', getproduct);
module.exports = productroutes;