import { BaseElements } from "../helpers/baseElements.js";
import { getUrlByEnv } from "../helpers/urls.js";

class BasePage extends BaseElements {
  async navigate() {
    const url = await getUrlByEnv();
    console.log(url);
    await browser.url(url);
  }
}

export { BasePage };