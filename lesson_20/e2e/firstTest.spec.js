import { expect } from 'chai';
import homePage from '../pageObjects/homePage.js';
import searchComponent from "../pageObjects/pageComponents/searchComponent.js";
import searchResultPage from '../pageObjects/searchResultPage.js';

describe('21 vek', () => {
  it(`title on search item should be the same as title on pdp`, async () => {
    await homePage.navigate();
    await homePage.click(homePage.agreeCookiesButton);
    await searchComponent.searchByText('велосипед');
    const searchItemText = await searchComponent.selectProductByNumber(1);
    expect(await searchResultPage.getText(searchResultPage.productTitle)).to.equal(searchItemText);
  })
});