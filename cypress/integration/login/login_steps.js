import { Given ,Then} from "cypress-cucumber-preprocessor/steps";
require('cypress-xpath')

Given(`I am in the right page`, () => {
    cy.visit('/')
});


Then('I should fill the inputs',  ()=> {
    cy.get('#username').type('admin@danhc.com')
    cy.get('.btn').click()
    cy.get('#password').type('user')
    cy.get('.login-btn').click()
    cy.wait(15000)

    cy.get('iframe')
    .then(($iframe) => {
      const $body = $iframe.contents().find('body')
  
      cy.wrap($body)
      .xpath('/html/body/app-root/fury-layout/mat-drawer-container/mat-drawer-content/div/div/div/app-dashboard/div/div/app-dashboard-sections/div/div[2]/div/a[1]')
        .click()
        cy.wait(5000)

    
    })

    cy.get('iframe')
    .then(($iframe) => {
      const $body = $iframe.contents().find('body')  
      cy.wrap($body).
      xpath('//*[@id="content-wrapper"]/hmx-master-data-root/div/hmx-nav-tab-container/div/div[1]/hmx-tabs/hmx-tab[2]')
      .click()

    
    })
});