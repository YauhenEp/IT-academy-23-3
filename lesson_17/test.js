const { Builder, By } = require('selenium-webdriver');
// const webdriver = require('selenium-webdriver');

(async function() {
  // const chromeCapabilities = webdriver.Capabilities.chrome();
  // const chromeOptions = {'args': ['--incognito']};
  // chromeCapabilities.set('chromeOptions', chromeOptions);


  const driver = new Builder().forBrowser('chrome').setChromeOptions({
    'args': ['--start-maximized', '--incognito']
  }).build();

  // const driver = new webdriver.Builder().withCapabilities(chromeCapabilities).build()

  await driver.manage().window().setSize({width: 1960, height: 1280});

  // await driver.manage().timeouts().implicitlyWait(10000);

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
  console.log(await errorMessage.getText());
  await driver.sleep(5000);
  await driver.quit();
})();