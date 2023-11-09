const { getObject } = require('../forTesting');
const { expect } = require('chai');

describe(`Object tests`, function () {
    it(`should return object`, async () => {
        const result = await getObject();
        expect(typeof result).to.equal('object');
    })

    it(`should return string 'Hi undefined!' without parameter`, async () => {
        const result = await getObject();
        expect(result).to.eq({});
    })

    it(`should return string 'Hi ...!' with parameter`, async () => {
        const result = await getObject('Yauhen');
        expect(result).to.eq({Yauhen: 'Yauhen'});
    })
})