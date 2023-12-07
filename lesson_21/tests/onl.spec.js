const { test, expect } = require('@playwright/test');

test.describe('Onliner', function () {
  test('get response', async ({page}) => {
    await page.on('response', async (response) => {
      if(response._initializer.url.includes('sdapi/kurs/api/bestrate')) {
        const buffer = await response.body();
        const encodeBuffer = buffer.toString('utf8');
        const jsonObj = JSON.parse(encodeBuffer)
        jsonObj.amount = 400000;
        Buffer.from(jsonObj, 'utf8');
        await response.body()
      }
    })

    await page.route('sdapi/kurs/api/bestrate', (route, request) => {
      // Override headers
      const headers = {
        ...request.headers(),
        foo: 'foo-value', // set "foo" header
        bar: undefined, // remove "bar" header
      };
      route.continue({ headers });
    });
    await page.goto('https://www.onliner.by/');
    await page.waitForTimeout(10000)
  })
})