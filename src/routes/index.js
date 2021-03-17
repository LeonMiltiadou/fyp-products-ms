const routes = require('express').Router();
const productroutes = require('./products');

routes.use('/product', productroutes);

module.exports = routes;