const productfunction = require('../functions/product')

module.exports = async (req, res) => {
  const cart = await productfunction.listAllProducts();

  res.status(cart.status).json(cart.data); // need to edit the return in functions

};
