const { Builder, By, until } = require('selenium-webdriver');
const {expect} = require('chai');

describe('Onliner tests', () => {
  let driver;
  before(async () => {
    driver = new Builder().forBrowser('chrome').setChromeOptions({
      'args': ['--start-maximized', '--incognito']
    }).build();
    await driver.manage().window().setSize({width: 1960, height: 1280});
  })

  after(async () => {
    await driver.quit();
  })

  it.skip('should be error message if login and password invalid', async () => {
    await driver.get('https://www.onliner.by/');
    const enterButton = await driver.findElement(By.css('.auth-bar__item.auth-bar__item--text'));
    await enterButton.click();
    const loginField = await driver.findElement(By.css('[placeholder="Ник или e-mail"]'));
    await loginField.sendKeys('Name');
    const passwordField = await driver.findElement(By.css('[placeholder="Пароль"]'));
    await passwordField.sendKeys('Password');
    const loginButton = await driver.findElement(By.css('.auth-button_primary'));
    await loginButton.click();
    const errorMessage = await driver.findElement(By.css('.auth-form__description_error'));
    expect(await errorMessage.getText()).to.equal('Неверный логин или пароль');
  })

  it('new ', async () => {
    await driver.get('https://www.onliner.by/');
    const topNavLinks = await driver.findElements(By.css('.b-main-navigation__link'));
    await topNavLinks[0].click();
    const beautyAndSportTab = await driver.findElement(By.css('.catalog-navigation-classifier [data-id="7"]'));
    await beautyAndSportTab.click();
    const hobbyItem = await driver.wait(until.elementLocated(By.xpath('//div[text()=" Хобби "]/..')), 10000);
    await driver.actions().move(hobbyItem).perform();
    const boardGamesButton = await driver.wait(until.elementLocated(By.css('.catalog-navigation-list__dropdown-item[href$="boardgame"]')[0]), 10000);
    await boardGamesButton.click();

    console.log('Hello')
    // const errorMessage = await driver.wait(until.elementLocated(By.css('.auth-form__description.auth-form__description_error')), 10000);
    // expect(await errorMessage.getText()).to.equal('Неверный логин или пароль');
  })
});