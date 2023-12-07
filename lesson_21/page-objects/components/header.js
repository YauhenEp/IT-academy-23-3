const Base = require('../base')

class Header extends Base {
  constructor(page) {
    super(page);
  }

  get searchLink() {
    return this.page.locator('#orbit-search-button');
  }
}

module.exports = Header;