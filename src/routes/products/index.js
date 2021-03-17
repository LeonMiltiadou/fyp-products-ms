const productroutes = require('express').Router();

const getproduct = require('./getProduct');
const listAllProducts = require('./listAllProducts');

productroutes.get('/get', listAllProducts);
productroutes.get('/get/:productID', getproduct);

module.exports = productroutes;