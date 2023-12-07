const { test, expect } = require('@playwright/test');
const BasePage = require('../pl-pages/basePage');
const Search = require('../pl-pages/components/search');

test.describe.skip('Playwright', function () {
  let basePage;
  let search;
  test.beforeEach(async ({page}) => {
    basePage = new BasePage(page);
    search = new Search(page);
  })

  test('playwright search', async ({page}) => {
    await basePage.navigate('https://playwright.dev/');
    await search.searchByText('chrome');
    await expect(await page.title()).toEqual('Chrome extensions | Playwright')
  })
})