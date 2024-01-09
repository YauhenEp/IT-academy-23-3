import { HomePage } from "../page-objects/homePage.js";
import { Search } from "../page-objects/components/search.js";

const homePage = new HomePage();
const search = new Search();

describe('Top Navigation menu', () => {
  it(`should go to used car page`, async () => {
    await homePage.navigate('https://www.onliner.by/');
    await search.searchByText('iphone')
    await browser.pause(5000);
  })
});