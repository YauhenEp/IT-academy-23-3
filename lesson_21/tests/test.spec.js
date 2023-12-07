// const { test: base, expect } = require('@playwright/test');
//
// const test = base.extend({
//   mainPage: async ({ page }, use) => {
//     await page.goto('https://www.epam.com');
//     await page.locator('#onetrust-accept-btn-handler').click();
//     await use(page);
//   },
// })
//
// test('open epam.com', async ({ mainPage }) => {
//   await expect(mainPage).toHaveTitle('EPAM | Software Engineering & Product Development Services')
// });