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
  getProduct: async (productID) => {
    return await productAPI.get(productID)
      .then(function (product) {
        return { data: product.data, status: product.status };
      })
      .catch(function (error) {
        if (error.response) {
          console.error('There was an error fetching the product', error);
          return { data: error.response.data, status: error.response.status };
        } else {
          return { data: error.message, status: 500 };
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
        if (error.response) {
          console.error('There was an error listing the products', error);
          return { data: error.response.data, status: error.response.status };
        } else {
          return { data: error.message, status: 500 };
        }
      });
  }
}