const BasePage = require('../basePage')

class LeftNavMenu extends BasePage {
  constructor(page) {
    super(page);
  }

  async getLeftNavMenuItemByName(itemName) {
    return this.page.locator(`xpath=//a[@class='navbar__item navbar__link' and text()='${itemName}']`)
  }

  async getLeftNavMenuCategory(itemName) {
    return this.page.locator(`xpath=//a[contains(@class,'menu__link') and text()='${itemName}']`)
  }

  async openPageByName(categoryName, itemName) {
    if(await (await this.getLeftNavMenuCategory('API reference')).getAttribute('aria-expanded') === false) {
      await (await this.getLeftNavMenuCategory('API reference')).click();
    }
    if(await (await this.getLeftNavMenuCategory(categoryName)).getAttribute('aria-expanded')) {
      await (await this.getLeftNavMenuCategory(categoryName)).click();
    }
    await (await this.getLeftNavMenuCategory(itemName)).click();
  }
}

module.exports = LeftNavMenu;