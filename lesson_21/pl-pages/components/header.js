const BasePage = require('../basePage')

class Header extends BasePage {
  constructor(page) {
    super(page);
  }

  async getNavTopMenuItemByName(itemName) {
    return this.page.locator(`//a[@class='navbar__item navbar__link' and text()='${itemName}']`)
  }

  async openPageByName(itemName) {
    console.log('this.getNavTopMenuItemByName(itemName) -- ', await this.getNavTopMenuItemByName(itemName))
    await (await this.getNavTopMenuItemByName(itemName)).click();
  }
}

module.exports = Header;