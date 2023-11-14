const weatherAPI = require('../data/weatherAPIschema.v1.json');
const { sendHttpRequest } = require('../helpers/sendHTTPrequest')

describe.skip(`API weather tests`, function() {
    describe(`valid cases`, function () {
        let response;
        beforeAll(async () => {
            const config = {
                url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                params: {q: '53.1,-0.13'},
                headers: {
                    'X-RapidAPI-Key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad4',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            }
            response = await sendHttpRequest(config)
        });

        test(`should return status code 200`, async () => {
            expect(response).toBeValidStatusCode(400);
        })

        test(`should be valid response body`, async () => {
            expect(response).toBeValidSchema(weatherAPI);
        })
    })

    describe('negative cases', () => {
        let response;
        beforeAll(async () => {
            const config = {
                url: 'https://weatherapi-com.p.rapidapi.com/current.json',
                params: {q: '53.1,-0.13'},
                headers: {
                    'X-RapidAPI-Key': 'adfvafgdsfsdafvsdafgvsdf',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            }
            response = await sendHttpRequest(config)
        });

        test(`should return 403 with invalid token`, async () => {
            expect(response).toBeValidStatusCode(403);
        })

        test(`should return status message 'You are not subscribed to this API.'`, async () => {
            expect(response.data.message).toEqual('You are not subscribed to this API.');
        })
    });

})