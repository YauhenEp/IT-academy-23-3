const { sayHi } = require('../forTesting');

describe(`String tests`, function () {

    const testData = [
        {name: 'Dasha', result: 'Hi Dasha!'},
        {name:'Klava', result:'Hi Klava!'},
        {name:'Pasha', result:'Hi Pasha!'}
    ]

    test.skip(`should return string`, async () => {
        const result = await sayHi();
        await expect(typeof result).toEqual('string');
    })

    test(`should return string 'Hi undefined!' without parameter`, async () => {
        const result = await sayHi();
        await expect(result).toEqual('Hi undefined!');
    })

    test(`should return string 'Hi ...!' with parameter`, async () => {
        const { expect } = require('chai')
        const result = await sayHi('Yauhen');
        expect(result).to.equal('Hi Yauhen!');
    })


    test.each(testData)(`should return $name with $result`, async ({name, result}) => {
        await expect(await sayHi(name)).toEqual(result);
    });

    test.each([
        [1,2,3],
        [3,4,7],
        [6,9,15]
    ])(`%i + %i equal %i`, async (firstNumber, secondNumber, result) => {
        await expect(firstNumber + secondNumber).toEqual(result)
    })


    describe(`something`, function () {
        test('should be true', async () => {
            await expect(true).toEqual(true)
        })
    })
})