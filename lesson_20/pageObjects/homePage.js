import { BasePage } from "./basePage.js";

class HomePage extends BasePage {
  constructor() {
    super()
  }

  get agreeCookiesButton() {
    return $('.AgreementCookie_buttons__zhpxj .Button-module__blue-primary .Button-module__buttonText');
  }

  async acceptCookies() {
    await this.click(this.agreeCookiesButton)
  }
}

export default new HomePage();