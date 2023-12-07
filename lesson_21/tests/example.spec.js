// @ts-check
const { test, expect } = require('@playwright/test');
const Base = require("../page-objects/base");
const SearchPage = require("../page-objects/searchPage");
const MainPage = require('../page-objects/mainPage');
const Header = require('../page-objects/components/header');

test.describe.skip('new suite', function () {
  // test('has title', async ({ page, context }) => {
  //   const searchPage = new SearchPage(page);
  //   const mainPage = new MainPage(page);
  //   const header = new Header();
  //   await mainPage.navigate('https://www.bbc.com/');
  //   await page.waitForTimeout(5000)
  //   dumpFrameTree(page.mainFrame(), '')
  //
  //   const frame = await page.frame({ url: /.*cdn.privacy-mgmt.*/ });
  //   // const acceptButton = await page.frameLocator('.sp_choice_type_11').getByLabel('User Name');
  //   // const frame = page.frames()[1];
  //   // await frame.waitForURL(new RegExp('.*/cdn.privacy-mgmt.com.*', 'i'));
  //   // console.log(await frame.locator("[title='I agree']"))
  //   console.log(frame);
  //   await frame.waitForLoadState();
  //   console.log(frame);
  //   const buttonAccept = await page.frameLocator("[title='I agree']");
  //   console.log(buttonAccept)
  //   await buttonAccept.click()
  //   // await context.pages()[0];
  //   // await acceptButton.click();
  //   await searchPage.search('rugby');
  //   await expect(searchPage.searchResults).toContainText(/Rugby/);
  // });
  //
  // function dumpFrameTree(frame, indent) {
  //   console.log(indent + frame.url());
  //   for (const child of frame.childFrames())
  //     dumpFrameTree(child, indent + '  ');
  // }

  // test('get started link', async ({ page }) => {
  //   await page.goto('https://playwright.dev/');
  //   await page.getByRole('link', { name: 'Get started' }).click();
  //   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  // });

  test('palywright', async ({page}) => {

  })
})

