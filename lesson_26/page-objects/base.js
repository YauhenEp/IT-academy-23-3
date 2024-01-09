import { BaseElements } from '../helpers/base-elements.js'

export class Base extends BaseElements {
  constructor() {
    super();
  }

  async navigate(url) {
    await browser.url(url)
  }
}