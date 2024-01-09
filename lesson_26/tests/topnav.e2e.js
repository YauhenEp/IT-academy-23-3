import { HomePage } from "../page-objects/homePage.js";
import { Header } from "../page-objects/components/header.js";

const homePage = new HomePage();
const header = new Header();

describe('Top Navigation menu', () => {
  it(`should go to used car page`, async () => {
    await homePage.navigate('https://www.onliner.by/');
    await header.goToPageByMenuItemName('Автобарахолка', 'Audi')
    await browser.pause(3000);
  })

  it(`should go to service page`, async () => {
    await homePage.navigate('https://www.onliner.by/');
    await header.goToPageByMenuItemName('Услуги')
    await browser.pause(3000)
  })
});

