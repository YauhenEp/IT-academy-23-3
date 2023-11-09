const { sayHi } = require('../forTesting');
const { expect } = require('chai');

describe(`String tests`, function () {
    it(`should return string`, async () => {
        const result = await sayHi();
        expect(typeof result).to.equal('string');
    })
})