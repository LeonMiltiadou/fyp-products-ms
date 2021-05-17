const routes = require('express').Router();
const productroutes = require('./products');

routes.use('/products', productroutes);

module.exports = routes;