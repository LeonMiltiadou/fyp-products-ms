"use strict";

var productroutes = require('express').Router();

var _require = require('./retrieveproduct'),
    retrieveProduct = _require.retrieveProduct;

var _require2 = require('./listAllProducts'),
    listAllProducts = _require2.listAllProducts;

productroutes.get('/get', listAllProducts);
productroutes.get('/get/:productID', retrieveProduct);
module.exports = productroutes;