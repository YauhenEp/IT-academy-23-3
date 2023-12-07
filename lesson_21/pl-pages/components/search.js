const BasePage = require('../basePage')

class Search extends BasePage {
  constructor(page) {
    super(page);
  }

  get searchButton() {
    return this.page.locator('.DocSearch.DocSearch-Button')
  }

  get searchField() {
    return this.page.locator('.DocSearch-Input')
  }

  get searchItems() {
    return this.page.locator('#docsearch-item-0 a')
  }

  get sidebar() {
    return this.page.locator('.sidebar_njMd')
  }
  async searchByText(searchText){
    await this.searchButton.click();
    await this.searchField.fill(searchText);
    // await this.searchItems.click();
    await this.searchItems.waitFor({state: "visible", timeout: 5000});
    await this.page.keyboard.press('Enter');
    await this.sidebar.waitFor({state: "visible", timeout: 5000});
  };
}

module.exports = Search;