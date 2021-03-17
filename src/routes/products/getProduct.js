const productfunction = require('../functions/product')

module.exports = async (req, res) => {
  const productID = req.params.productID;  
  const cart = await productfunction.getProduct(productID)

  res.status(cart.status).json(cart.data);
};