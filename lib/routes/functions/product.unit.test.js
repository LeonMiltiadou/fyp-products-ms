"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jestMockAxios = _interopRequireDefault(require("jest-mock-axios"));

var _require = require('./product'),
    retrieveProduct = _require.retrieveProduct,
    listAllProducts = _require.listAllProducts;

afterEach(function () {
  // cleaning up the mess left behind the previous test
  _jestMockAxios["default"].reset();
});
describe("product functions", function () {
  describe("retrieveProduct", function () {
    function callRetrieveProduct() {
      var productID = 1;
      return retrieveProduct(productID);
    }

    test("SHOULD retrieve the cart RETURNS cart data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              serverMockResponse = {
                data: "test=cart-data",
                status: 200
              };
              expectedResponse = {
                data: "test=cart-data",
                status: 200
              };
              result = callRetrieveProduct();

              _jestMockAxios["default"].mockResponse(serverMockResponse);

              _context.next = 6;
              return result;

            case 6:
              actualResponse = _context.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
    test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              serverMockResponse = {
                message: "test-error-data",
                status: 500
              };
              expectedResponse = {
                error: "There was an error retrieving the product - The Request was not made",
                data: "test-error-data",
                status: 500
              };
              result = callRetrieveProduct();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context2.next = 6;
              return result;

            case 6:
              actualResponse = _context2.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));
    test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              serverMockResponse = {
                response: {
                  data: "test-error-data",
                  status: 418
                }
              };
              expectedResponse = {
                error: "There was an error retrieving the product",
                data: "test-error-data",
                status: 418
              };
              result = callRetrieveProduct();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context3.next = 6;
              return result;

            case 6:
              actualResponse = _context3.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    })));
    test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              serverMockResponse = {
                request: {}
              };
              expectedResponse = {
                error: "There was an error retrieving the product - The request was made but no response was received",
                status: 502
              };
              result = callRetrieveProduct();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context4.next = 6;
              return result;

            case 6:
              actualResponse = _context4.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    })));
  });
  describe("listAllProducts", function () {
    test("SHOULD list all of the products RETURNS cart data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              serverMockResponse = {
                data: "test=cart-data",
                status: 200
              };
              expectedResponse = {
                data: "test=cart-data",
                status: 200
              };
              result = listAllProducts();

              _jestMockAxios["default"].mockResponse(serverMockResponse);

              _context5.next = 6;
              return result;

            case 6:
              actualResponse = _context5.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    })));
    test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              serverMockResponse = {
                message: "test-error-data",
                status: 500
              };
              expectedResponse = {
                error: "There was an error retrieving a list of products - The Request was not made",
                data: "test-error-data",
                status: 500
              };
              result = listAllProducts();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context6.next = 6;
              return result;

            case 6:
              actualResponse = _context6.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    })));
    test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              serverMockResponse = {
                response: {
                  data: "test-error-data",
                  status: 418
                }
              };
              expectedResponse = {
                error: "There was an error retrieving a list of products",
                data: "test-error-data",
                status: 418
              };
              result = listAllProducts();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context7.next = 6;
              return result;

            case 6:
              actualResponse = _context7.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    })));
    test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8() {
      var serverMockResponse, expectedResponse, result, actualResponse;
      return _regenerator["default"].wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              serverMockResponse = {
                request: {}
              };
              expectedResponse = {
                error: "There was an error retrieving a list of products - The request was made but no response was received",
                status: 502
              };
              result = listAllProducts();

              _jestMockAxios["default"].mockError(serverMockResponse);

              _context8.next = 6;
              return result;

            case 6:
              actualResponse = _context8.sent;
              expect(actualResponse).toEqual(expectedResponse);

            case 8:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    })));
  });
});