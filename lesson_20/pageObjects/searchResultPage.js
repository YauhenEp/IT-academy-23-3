import { BasePage } from "./basePage.js";

class SearchResultPage extends BasePage {
  constructor() {
    super()
  }

  get productTitle() {
    return $('.content__header h1');
  }
}

export default new SearchResultPage();