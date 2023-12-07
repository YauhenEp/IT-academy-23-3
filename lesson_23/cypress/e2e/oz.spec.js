const mainPage = require('../../page-objects/mainPage');
const loginPage = require('../../page-objects/loginPage');

describe('oz.by', function () {
    it.skip('login', () => {
        mainPage.navigate('https://oz.by/');
        loginPage.loginByEmail('afkodsfopdsf@test', 'password123');
        cy.validateText(loginPage.errorNotification, 'Введите корректный адрес электронной почты');
    })

    it('check/uncheck', () => {
        mainPage.navigate('https://oz.by/books/bestsellers/');
        cy.get('#ul_id_people > :nth-child(1) > .filters__chkslist__item > i.filters__chkslist__chk').click()
    })
});