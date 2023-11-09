const { getObject } = require('../forTesting');
const { expect } = require('chai');

describe(`Object tests`, function () {
    before(async () => {
        console.log('I am running before ALL tests!')
    })

    after(async () => {
        console.log('I am running after ALL tests!')
    })

    beforeEach(async () => {
        console.log('I am running before EACH test!')
    })

    afterEach(async () => {
        console.log('I am running after EACH test!')
    })

    it(`should return object`, async () => {
        console.log(1)
        const result = await getObject();
        expect(typeof result).to.equal('object');
        console.log('I am HERE')
    })

    it(`should return string 'Hi undefined!' without parameter`, async () => {
        const result = await getObject();
        console.log(2)
        expect(result).to.eq({});

        console.log('I am NOT here')
    })

    it(`should return string 'Hi ...!' with parameter`, async () => {
        const result = await getObject('Yauhen')
        console.log(3)
        expect(result).to.eq({Yauhen: 'Yauhen'});
    })
})