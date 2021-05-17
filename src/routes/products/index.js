const productroutes = require('express').Router();

const { retrieveProduct }= require('./retrieveProduct');
const { listAllProducts }= require('./listAllProducts');

productroutes.get('/get', listAllProducts);
productroutes.get('/get/:productID', retrieveProduct);

module.exports = productroutes;