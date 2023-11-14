const axios = require('axios');
const Validator = require('jsonschema').Validator;
const validate = new Validator();
const crunchAPI = require('../data/crunchAPI.json')

describe(`API crunch tests`, function() {
    describe(`valid cases`, function () {
        let response;
        beforeAll(async () => {
            response = await axios.post('https://crunchbase-crunchbase-v1.p.rapidapi.com/searches/organizations', {
                field_ids: [
                    'identifier',
                    'location_identifiers',
                    'short_description',
                    'rank_org'
                ],
                limit: 50,
                order: [
                    {
                        field_id: 'rank_org',
                        sort: 'asc'
                    }
                ],
                query: [
                    {
                        field_id: 'location_identifiers',
                        operator_id: 'includes',
                        type: 'predicate',
                        values: [
                            '6106f5dc-823e-5da8-40d7-51612c0b2c4e'
                        ]
                    },
                    {
                        field_id: 'facet_ids',
                        operator_id: 'includes',
                        type: 'predicate',
                        values: ['company']
                    }
                ]
                },
                {
                    headers: {
                        'content-type': 'application/json',
                        'X-RapidAPI-Key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad4',
                        'X-RapidAPI-Host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
                    },
                    }
                );
            });

        test(`should return status code 200`, async () => {
            expect(response.status).toBe(200);
        })

        test(`should be valid response body`, async () => {
            const result = validate.validate(response.data, crunchAPI);
            expect(result.valid).toBe(true);
        })
    })
})