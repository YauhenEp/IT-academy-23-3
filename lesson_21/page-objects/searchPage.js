const Base = require('./base');
const header = require('./components/header');

class SearchPage extends Base {
  constructor(page) {
    super(page);
  }

  get searchField() {
    return this.page.locator('#searchInput');
  }

  get searchButton() {
    return this.page.locator('#searchButton')
  }

  get searchResults() {
    return this.page.locator('.ssrcss-its5xf-PromoLink.exn3ah91')
  }

  async search(searchText) {
    await header.searchLink.click();
    await this.searchField.fill(searchText);
    await this.searchButton.click();
  }
}

module.exports = SearchPage;