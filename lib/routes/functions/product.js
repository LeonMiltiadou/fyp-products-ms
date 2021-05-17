"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

require('dotenv').config();

var url = process.env.COMMERCEBASEURL + "/products/";

var productAPI = _axios["default"].create({
  baseURL: url,
  timeout: 3000,
  headers: {
    'X-Authorization': process.env.COMMERCEPUBLICKEY,
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

module.exports = {
  /**
  * Retrieves a product that matches the given product ID
  * https://commercejs.com/docs/api/#get-product
  */
  retrieveProduct: function () {
    var _retrieveProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(productID) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return productAPI.get(productID).then(function (product) {
                return {
                  data: product.data,
                  status: product.status
                };
              })["catch"](function (error) {
                var baseErrorMsg = "There was an error retrieving the product";

                if (error.response) {
                  console.error(baseErrorMsg, error);
                  return {
                    error: baseErrorMsg,
                    data: error.response.data,
                    status: error.response.status
                  };
                } else if (error.request) {
                  console.error(baseErrorMsg + " - The request was made but no response was received", error);
                  return {
                    error: baseErrorMsg + " - The request was made but no response was received",
                    status: 502
                  };
                } else {
                  console.error(baseErrorMsg + " - The Request was not made", error);
                  return {
                    error: baseErrorMsg + " - The Request was not made",
                    data: error.message,
                    status: 500
                  };
                }
              });

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function retrieveProduct(_x) {
      return _retrieveProduct.apply(this, arguments);
    }

    return retrieveProduct;
  }(),

  /**
  * Lists all products
  * https://commercejs.com/docs/api/#list-all-products
  */
  listAllProducts: function () {
    var _listAllProducts = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return productAPI.get().then(function (cart) {
                return {
                  data: cart.data,
                  status: cart.status
                };
              })["catch"](function (error) {
                var baseErrorMsg = "There was an error retrieving a list of products";

                if (error.response) {
                  console.error(baseErrorMsg, error);
                  return {
                    error: baseErrorMsg,
                    data: error.response.data,
                    status: error.response.status
                  };
                } else if (error.request) {
                  console.error(baseErrorMsg + " - The request was made but no response was received", error);
                  return {
                    error: baseErrorMsg + " - The request was made but no response was received",
                    status: 502
                  };
                } else {
                  console.error(baseErrorMsg + " - The Request was not made", error);
                  return {
                    error: baseErrorMsg + " - The Request was not made",
                    data: error.message,
                    status: 500
                  };
                }
              });

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function listAllProducts() {
      return _listAllProducts.apply(this, arguments);
    }

    return listAllProducts;
  }()
};