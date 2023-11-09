const { sayHi } = require('../forTesting');
const { expect } = require('chai');

describe(`String tests`, function () {

    const testData = [
        {name: 'Dasha', result: 'Hi Dasha!'},
        {name:'Klava', result:'Hi Klava!'},
        {name:'Pasha', result:'Hi Pasha!'}
    ]

    it(`should return string`, async () => {
        const result = await sayHi();
        expect(typeof result).to.equal('string');
    })

    it(`should return string 'Hi undefined!' without parameter`, async () => {
        const result = await sayHi();
        expect(result).to.equal('Hi undefined!');
    })

    it(`should return string 'Hi ...!' with parameter`, async () => {
        const result = await sayHi('Yauhen');
        expect(result).to.equal('Hi Yauhen!');
    })

    testData.forEach(testCase => {
        it(`should return '${testCase.result}' with ${testCase.name}`, async () => {
            expect(await sayHi(testCase.name)).to.equal(testCase.result);
        });
    })

    describe(`something`, function () {
        it('should be true', async () => {
            expect(true).to.equal(true)
        })
    })
})