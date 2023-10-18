const stepContent = '.horizontal > .step-content > h3.ng-star-inserted'

function clickNextButton() {
    cy.get('button').eq(3).click()
}
describe('Test step headers', () => {
    it('Check text for all steps', () => {
    //1st step
    cy.visit('/pages/layout/stepper')
    cy.get(stepContent).should('contain.text', 'Step content #1')
    clickNextButton()
    //2nd step
    cy.get(stepContent).should('contain.text', 'Step content #2')
    clickNextButton()
    //3rd step
    cy.get(stepContent).should('contain.text', 'Step content #3')
    clickNextButton()
    //4th step
    cy.get(stepContent).should('contain.text', 'Step content #4')
    cy.get('button').eq(3).should('be.disabled')
    })
  })