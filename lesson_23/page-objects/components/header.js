const Base = require('../base');

class Header extends Base {
  constructor() {
    super();
  }

  get loginButton() {
    return cy.get('.header__user-bar > :nth-child(2) > .link')
  }
}

module.exports = new Header();