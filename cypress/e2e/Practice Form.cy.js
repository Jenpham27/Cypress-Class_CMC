Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Practice', () => {
    it('Practice Form',()=>{
        cy.viewport(1920,1080)
        cy.visit('https://demoqa.com/automation-practice-form/')
        cy.get("input[id='firstName']").type('Jen')
        cy.get("input[id='lastName']").type('Pham')
        cy.get("input[id='userEmail']").type('jenpham@gmail.com')
        cy.get("input[id='gender-radio-2']").click({force:true})
        cy.get("input[id='userNumber']").type('0334800444')
        cy.get("input[id='dateOfBirthInput']").click()
        cy.get("select[class='react-datepicker__year-select']").select('1993')
        cy.get("select[class='react-datepicker__month-select']").select('4')
        cy.get("div[class='react-datepicker__day react-datepicker__day--027']").click()
        cy.get("div[class='subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3']").click().type('English{enter}')
        cy.get("input[id='hobbies-checkbox-2']").click({force:true})
        cy.get("textarea[id='currentAddress']").type('No 9, Duy Tan Street, Dich Vong Hau, Cau Giay, Ha Noi')
        cy.get("div[id='state']").type('NCR{enter}')
        cy.get("div[id='city']").type('Noida{enter}')
        cy.get("button[id='submit']").click()
})  
})