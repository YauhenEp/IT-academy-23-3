const axios = require('axios');
const Validator = require('jsonschema').Validator;
const validate = new Validator();
const weatherAPI = require('../data/weatherAPIschema.v1.json')

describe(`API weather tests`, function() {
    describe(`valid cases`, function () {
        let response;
        beforeAll(async () => {
            response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
                params: {q: '53.1,-0.13'},
                headers: {
                    'X-RapidAPI-Key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad4',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            })
        });

        test(`should return status code 200`, async () => {
            expect(response.status).toBe(200);
        })

        test(`should be valid response body`, async () => {
            const result = validate.validate(response.data, weatherAPI);
            expect(result.valid).toBe(true);
        })
    })

    describe('negative cases', () => {
        let response;
        beforeAll(async () => {
            try {
                response = await axios.get('https://weatherapi-com.p.rapidapi.com/current.json', {
                    params: {q: '53.1,-0.13'},
                    headers: {
                        'X-RapidAPI-Key': 'adfvafgdsfsdafvsdafgvsdf',
                        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                    }
                })
            } catch (err) {
                response = err;
            }
        });

        test(`should return 403 with invalid token`, async () => {
            expect(response.response.status).toEqual(403);
        })

        test(`should return status message 'You are not subscribed to this API.'`, async () => {
            expect(response.response.data.message).toEqual('You are not subscribed to this API.');
        })
    });

})
