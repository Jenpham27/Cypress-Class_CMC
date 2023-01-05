import Nopcommerce from "../support/pageObjects/Nopcommerce"

const Nopcommerce = new Nopcommerce()

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Exercise', () => {
    it('Nopcommerce',()=>{
        cy.viewport(1902,1080)
        cy.visit('https://demo.nopcommerce.com/')
        // cy.get("a[class='ico-register']").click()
        // cy.get("input[id='gender-female']").click()
        Nopcommerce.getInputFirstName().type('jen')
        // cy.get("input[id='LastName']").type('Pham')
        // cy.get("select[name='DateOfBirthDay']").select('27')
        // cy.get("select[name='DateOfBirthMonth']").select('5')
        // cy.get("select[name='DateOfBirthYear']").select('1993')
        // cy.get("input[id='Email']").type('jenpham4@gmail.com')
        // cy.get("input[id='Company']").type('CMC Global')
        // cy.get("input[id='Password']").type('12345678')
        // cy.get("input[id='ConfirmPassword']").type('12345678')
        // cy.get("button[id='register-button']").click()
        // cy.get("div[class='buttons']").click()
        // cy.get("a[class='ico-login']").click()
        // cy.get("input[id='Email']").type('jenpham4@gmail.com')
        // cy.get("input[id='Password']").type('12345678')
        // cy.get("input[id='RememberMe']").click()
        // cy.get("button[class='button-1 login-button']").click()
    })
})