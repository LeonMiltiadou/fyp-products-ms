const cartFunction = require('../functions/product')

const listAllProducts = async (req, res) => {
  const cart = await exportFunctions.cartFunction.listAllProducts();

 //Checks to see that the required object keys exist, otherwise an error occured
 if (cart.error || cart.data || cart.status) {

  //If there was an error adding to the cart
  if (cart.error) {

    if (cart.data) {
      res.status(cart.status).json({error : cart.error,data: cart.data});
    } else {
      res.status(cart.status).json({error: cart.error});
    }
  } else {
    //Successfully added to cart
    res.status(cart.status).json(cart.data);
  }

} else {
  const errorMsg = "An unexpected error has occured";
  console.error(errorMsg)
  res.status(500).json({ error: errorMsg })
}
};

const exportFunctions = { listAllProducts, cartFunction };
module.exports = exportFunctions;