
describe('Test login', () => {
it('Check user authorization', () => {
  cy.visit('auth/login')
  cy.get('#title').should('contain', 'Login') 
  cy.get('#input-email').type('abarton@test.com')  
  cy.get('#input-password').type('password')
  cy.get('.custom-checkbox').click()
  cy.get('.appearance-filled').click().wait(3000)
  cy.url().should('contain', '/pages')
 })  
})
  