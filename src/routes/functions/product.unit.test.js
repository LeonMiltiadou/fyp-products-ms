import mockAxios from 'jest-mock-axios';
const { retrieveProduct, listAllProducts } = require('./product');

afterEach(() => {
    // cleaning up the mess left behind the previous test
    mockAxios.reset();
})

describe("product functions", () => {
    describe("retrieveProduct", () => {
        function callRetrieveProduct() {
            const productID = 1;
            return retrieveProduct(productID);
        }
        test("SHOULD retrieve the cart RETURNS cart data and status code as an object", async function () {
            const serverMockResponse = { data: "test=cart-data", status: 200 };
            const expectedResponse = { data: "test=cart-data", status: 200 };
            
            let result = callRetrieveProduct();
            mockAxios.mockResponse(serverMockResponse);
            const actualResponse = await result;
            
            expect(actualResponse).toEqual(expectedResponse);
            
        });
        
        test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", async function () {
            const serverMockResponse = { message: "test-error-data", status: 500 };
            const expectedResponse = { error: "There was an error retrieving the product - The Request was not made", data: "test-error-data", status: 500 };
            
            let result = callRetrieveProduct();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;
            
            expect(actualResponse).toEqual(expectedResponse);
            
        });
        
        
        test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", async function () {
            const serverMockResponse = { response: { data: "test-error-data", status: 418 } };
            const expectedResponse = { error: "There was an error retrieving the product", data: "test-error-data", status: 418 };
            
            
            
            let result = callRetrieveProduct();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;
            
            expect(actualResponse).toEqual(expectedResponse);
            
        });
        
        test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", async function () {
            const serverMockResponse = { request: {} };
            const expectedResponse = { error: "There was an error retrieving the product - The request was made but no response was received", status: 502 };
            
            let result = callRetrieveProduct();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;
            
            expect(actualResponse).toEqual(expectedResponse);
            
        });                

    });

    describe("listAllProducts", () => {
       
        test("SHOULD list all of the products RETURNS cart data and status code as an object", async function () {
            const serverMockResponse = { data: "test=cart-data", status: 200 };
            const expectedResponse = { data: "test=cart-data", status: 200 };
            
            let result = listAllProducts();
            mockAxios.mockResponse(serverMockResponse);
            const actualResponse = await result;
            
            expect(actualResponse).toEqual(expectedResponse);
            
        });
        
        test("SHOULD log 500 error BECAUSE request was never sent to external server RETURNS error data and status code as an object", async function () {
            const serverMockResponse = { message: "test-error-data", status: 500 };
            const expectedResponse = { error: "There was an error retrieving a list of products - The Request was not made", data: "test-error-data", status: 500 };
            
            let result = listAllProducts();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;
            
            expect(actualResponse).toEqual(expectedResponse);
            
        });
        
        
        test("SHOULD log 418 error BECAUSE some error occured on external server RETURNS error, data and status code as an object", async function () {
            const serverMockResponse = { response: { data: "test-error-data", status: 418 } };
            const expectedResponse = { error: "There was an error retrieving a list of products", data: "test-error-data", status: 418 };
            
            
            
            let result = listAllProducts();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;
            
            expect(actualResponse).toEqual(expectedResponse);
            
        });
        
        test("SHOULD log 502 error BECAUSE external server did not respond RETURNS error and status code as an object", async function () {
            const serverMockResponse = { request: {} };
            const expectedResponse = { error: "There was an error retrieving a list of products - The request was made but no response was received", status: 502 };
            
            let result = listAllProducts();
            mockAxios.mockError(serverMockResponse);
            const actualResponse = await result;
            
            expect(actualResponse).toEqual(expectedResponse);
            
        });                
    });
});