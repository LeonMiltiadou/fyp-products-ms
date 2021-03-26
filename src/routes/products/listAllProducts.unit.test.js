let { listAllProducts, cartFunction } = require('./listAllProducts');

describe("listAllProducts", () => {
    test("SHOULD successfully list all of the products RESPOND with status code and data", async () => {

        const expectedStatus = 200;
        const expectedData = 1;

        let req = {};

        let res = {
            status:
                function (status) {
                    expect(status).toEqual(expectedStatus);
                    return this;
                },
            json:
                function (data) {
                    expect(data).toEqual(expectedData);
                    return this
                }
        };

        cartFunction.listAllProducts = jest.fn().mockReturnValue({ data: expectedData, status: expectedStatus });

        await listAllProducts(req, res);
    });

    
    test("SHOULD log 500 error BECAUSE request was never sent to external server SENDS status code 500, and error msg and data as a json object", async function () {

        const expectedResponse = { error: "test-error-message", data: "test-error-data", status: 500 };
        const expectedData = { error: "test-error-message", data: "test-error-data"};
        const expectedStatus = 500;


        let req = {};

        let res = {
            status:
                function (status) {
                    expect(status).toEqual(expectedStatus);
                    return this;
                },
            json:
                function (data) {
                    expect(data).toEqual(expectedData);
                    return this;
                }
        };

        cartFunction.listAllProducts = jest.fn().mockReturnValue(expectedResponse);

        await listAllProducts(req, res);
    });

    test("SHOULD log 418 error BECAUSE some error occured on external server SENDS status code 418, and error msg and data as a json object", async function () {

        const expectedStatus = 418;
        const expectedResponse = { error: "test-error-message", data: "test-error-data", status: 418 };
        const expectedData = { error: "test-error-message", data: "test-error-data"};

        let req = {};

        let res = {
            status:
                function (status) {
                    expect(status).toEqual(expectedStatus);
                    return this;
                },
            json:
                function (data) {
                    expect(data).toEqual(expectedData);
                    return this
                }
        };

        cartFunction.listAllProducts = jest.fn().mockReturnValue(expectedResponse);

        await listAllProducts(req, res);
    });
    test("SHOULD log 502 error BECAUSE external server did not respond SENDS status code 502, and error msg as a json object", async function () {

        const expectedStatus = 502;
        const expectedData = { error: "test-error-message"};
        const expectedResponse = { error: "test-error-message", status: 502 };

        let req = {};

        let res = {
            status:
                function (status) {
                    expect(status).toEqual(expectedStatus);
                    return this;
                },
            json:
                function (data) {
                    expect(data).toEqual(expectedData);
                    return this
                }
        };

        cartFunction.listAllProducts = jest.fn().mockReturnValue(expectedResponse);

        await listAllProducts(req, res);
    });

    test("SHOULD log 500 error BECAUSE error, data, and status object all did not exist SENDS status code 500, and error msg as a json object", async function () {

        const expectedStatus = 500;
        const expectedData = { error: "An unexpected error has occured"};
        const expectedResponse = { };

        let req = {};

        let res = {
            status:
                function (status) {
                    expect(status).toEqual(expectedStatus);
                    return this;
                },
            json:
                function (data) {
                    expect(data).toEqual(expectedData);
                    return this
                }
        };

        cartFunction.listAllProducts = jest.fn().mockReturnValue(expectedResponse);

        await listAllProducts(req, res);
    });
});