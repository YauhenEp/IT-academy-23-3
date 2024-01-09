import { Base } from "../base.js";

export class Search extends Base {
  constructor() {
    super();
  }

  get searchInput() {
    return $(`.fast-search__input`);
  }

  get searchFrame() {
    return $(`.modal-iframe`)
  }

  get searchItemLinks() {
    return $$(`.product__title-link`)
  }

  async searchByText(text) {
    await this.click(await this.searchInput);
    await this.fillValue(await this.searchInput, text);
    await browser.switchToFrame(await this.searchFrame);
    await this.click(await this.searchItemLinks[0]);
    await browser.pause(5000);
  }
}