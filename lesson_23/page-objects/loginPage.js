const Base = require('./base')
const header = require('./components/header')

class LoginPage extends Base {
  constructor() {
    super();
  }

  get loginFromEmailTab() {
    return cy.get('#loginFormLoginEmailLink')
  }

  get loginField() {
    return cy.get('#loginForm > .i-input-group > .i-input-group__inner > :nth-child(1) > .i-input')
  }

  get passwordField() {
    return cy.get('#loginForm > .i-input-group > .i-input-group__inner > :nth-child(2) > .i-input')
  }

  get loginButton() {
    return cy.get('#loginForm > .i-button_full-width')
  }

  get errorNotification() {
    return cy.get('.i-input-group > .i-input-group__popover > #test > .i-popover__main > .i-popover__line')
  }
  loginByEmail(login, password) {
    header.loginButton.click();
    this.loginFromEmailTab.click();
    this.loginField.type(login)
    this.passwordField.type(password)
    this.loginButton.click()
  }
}

module.exports = new LoginPage();