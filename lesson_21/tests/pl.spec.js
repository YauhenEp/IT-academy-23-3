const { test, expect } = require('@playwright/test');
const BasePage = require('../pl-pages/basePage');
const Search = require('../pl-pages/components/search');
const Header = require('../pl-pages/components/header');
const LeftNavMenu = require('../pl-pages/components/leftNavMenu')

test.describe('Playwright', function () {
  let basePage;
  let search;
  let header;
  let leftNavMenu;
  test.beforeEach(async ({page}) => {
    basePage = new BasePage(page);
    search = new Search(page);
    header = new Header(page);
    leftNavMenu = new LeftNavMenu(page)
  })

  test('playwright search', async ({page}) => {
    await basePage.navigate('https://playwright.dev/');
    await search.searchByText('chrome');
    await expect(await page.title()).toEqual('Chrome extensions | Playwright')
  })

  test('go to API page', async () => {
    await basePage.navigate('https://playwright.dev/');
    await header.openPageByName('API');
    await leftNavMenu.openPageByName('Classes', 'APIRequest');
    await expect(await (await basePage.headerElement).textContent()).toEqual('APIRequest')
  })
})