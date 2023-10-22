const modal = '[id="cdk-overlay-0"]'

describe('Test modal Dialog', () => {
    it('Check header and modal buttons', () => {
    cy.visit('/pages/modal-overlays/dialog')
    cy.get('.result-from-dialog > .appearance-filled').click()
    cy.get(modal).should('be.visible')
    cy.get(modal).find('nb-card-header').should('contain', 'Enter your name')
    cy.get(modal).find('button').should('have.length', 2)
    cy.get(modal).find('button').first().should('contain.text', 'Cancel')
    cy.get(modal).find('button').last().should('contain.text', 'Submit')  
    })
  })