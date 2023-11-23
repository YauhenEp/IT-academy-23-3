import {expect} from 'chai';

describe('21 vek', () => {
  it(`title on search item should be the same as title on pdp`, async () => {
    await browser.url('https://www.21vek.by/');
    const agreeCookiesButton = await $('.AgreementCookie_buttons__zhpxj .Button-module__blue-primary .Button-module__buttonText');
    await agreeCookiesButton.click();
    const searchElement = await $('#catalogSearch');
    await searchElement.click();
    await searchElement.setValue('велосипед');
    const productItems = await $$('.ProductItem_title__qJCTw');
    await productItems[0].waitForClickable();
    const searchItemText = await productItems[0].getText();
    await productItems[0].click();
    expect(await $('.content__header h1').getText()).to.equal(searchItemText);
  })
});