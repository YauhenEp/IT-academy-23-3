class BasePage {
  constructor(page) {
    this.page = page;
  }

  get headerElement() {
    return this.page.locator('header h1');
  }

  async navigate(url) {
    await this.page.goto(url);
  }
}

module.exports = BasePage;

