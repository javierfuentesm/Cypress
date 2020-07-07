
describe('Prueba de login',()=>{
    it('Debe cargar el login',()=>{
        cy.visit('/login.html')
    })
    it('should fill the inputs', function () {
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('#user_remember_me').click()
        cy.contains('Sign in').click()
    });
})
