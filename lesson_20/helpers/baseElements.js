class BaseElements {
  async click(element) {
    await element.waitForClickable();
    return element.click();
  }

  async setValue(element, text) {
    await element.waitForDisplayed();
    return element.setValue(text);
  }

  async getText(element) {
    await element.waitForDisplayed();
    return element.getText();
  }
}

export { BaseElements };

