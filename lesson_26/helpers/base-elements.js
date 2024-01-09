import { waitForElementClickable, waitForElementDisplayed } from "./waiters.js";
import { defaultTimeout } from "./constants.js";

export class BaseElements {
  async click(element, timeout = defaultTimeout ) {
      await waitForElementClickable(element, timeout);
      return element.click();
  }

  async fillValue(element, text, timeout = defaultTimeout, clearValue = true) {
    await waitForElementDisplayed(element, timeout);
    if(clearValue) {
      return element.setValue(text);
    }
    return element.addValue(text);
  }
}