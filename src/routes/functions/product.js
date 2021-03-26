import axios from 'axios';
require('dotenv').config()


const url = process.env.COMMERCEBASEURL + "/products/";

const productAPI = axios.create({
  baseURL: url,
  timeout: 3000,
  headers: {
    'X-Authorization': process.env.COMMERCEPUBLICKEY, "Accept": "application/json",
    "Content-Type": "application/json",
  }
});

module.exports = {

  /**
  * Retrieves a product that matches the given product ID
  * https://commercejs.com/docs/api/#get-product
  */
  retrieveProduct: async (productID) => {
    return await productAPI.get(productID)
      .then(function (product) {
        return { data: product.data, status: product.status };
      })
      .catch(function (error) {

        const baseErrorMsg = "There was an error retrieving the product";

        if (error.response) {
          console.error(baseErrorMsg, error);
          return { error: baseErrorMsg, data: error.response.data, status: error.response.status };
        } else if (error.request) {
          console.error(baseErrorMsg + " - The request was made but no response was received", error);
          return { error: baseErrorMsg + " - The request was made but no response was received", status: 502 };
        } else {
          console.error(baseErrorMsg + " - The Request was not made", error);
          return { error: baseErrorMsg + " - The Request was not made", data: error.message, status: 500 };

        }
      });
  },

  /**
  * Lists all products
  * https://commercejs.com/docs/api/#list-all-products
  */
  listAllProducts: async () => {
    return await productAPI.get()
      .then(function (cart) {
        return { data: cart.data, status: cart.status };
      })
      .catch(function (error) {
        const baseErrorMsg = "There was an error retrieving a list of products";

        if (error.response) {
          console.error(baseErrorMsg, error);
          return { error: baseErrorMsg, data: error.response.data, status: error.response.status };
        } else if (error.request) {
          console.error(baseErrorMsg + " - The request was made but no response was received", error);
          return { error: baseErrorMsg + " - The request was made but no response was received", status: 502 };
        } else {
          console.error(baseErrorMsg + " - The Request was not made", error);
          return { error: baseErrorMsg + " - The Request was not made", data: error.message, status: 500 };

        }
      });
  }
}