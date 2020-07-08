import { Given ,Then} from "cypress-cucumber-preprocessor/steps";



Then('I should fill the inputs',  ()=> {
    cy.get('#user_login').type('username')
    cy.get('#user_password').type('password')
    cy.get('#user_remember_me').click()
    cy.contains('Sign in').click()
    cy.screenshot(Date.now().toString(),{capture:'fullPage'})

});

Given(`I am in the right page`, () => {
    cy.visit('/login.html')
});
