import { BaseComponents } from "./baseComponents.js";

class SearchComponent extends BaseComponents {
  constructor() {
    super();
    this.searchField = () => $('#catalogSearch');
  }

  get productItems() {
    return $$('.ProductItem_title__qJCTw');
  }
s
  async searchByText(searchText) {
    await this.searchField().waitForDisplayed();
    await this.searchField().click();
    await this.searchField().setValue(searchText);
  }

  async selectProductByNumber(productNumber) {
    await this.productItems[productNumber - 1].waitForClickable();
    const searchItemText = await this.productItems[productNumber - 1].getText();
    await this.productItems[productNumber - 1].click();
    return searchItemText;
  }
}

export default new SearchComponent();