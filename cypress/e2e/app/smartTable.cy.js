function fillCell(index, value) {
    cy.get(':nth-child(3) .form-control').eq(index)
    .clear().type(value)
}
function editCell(index, value) {
cy.get('tbody > tr').first().find('td').eq(index)
  .find('input').clear().type(value)
}


describe('Test adding and editing user in table', () => {
    it('Add new user', () => {
    cy.visit('pages/tables/smart-table')
    cy.get('.ng2-smart-actions-title > .ng2-smart-action').click()
    fillCell(1, '25')
    fillCell(2, 'Tom')
    fillCell(3, 'Barton')
    fillCell(4, 'Tom_Barton')
    fillCell(5, 'tbarton@test.com')
    fillCell(6, '30')
    cy.get('.nb-checkmark').click()
    //check user data
    const userData = ['25', 'Tom', 'Barton', 'Tom_Barton', 'tbarton@test.com', '30']
    userData.forEach((value, index) => {
      cy.get(`tbody > :nth-child(1) > :nth-child(${index + 2})`).should('contain', value)
    })
    //edit user
    cy.get(':nth-child(1) > .ng2-smart-actions > ng2-st-tbody-edit-delete > .ng2-smart-action-edit-edit')
      .click()
    editCell(1, '100')
    editCell(2, 'Anna')
    editCell(3, 'Simpson')
    editCell(4, 'Anna_Simpson')
    editCell(5, 'asimpson@test.com')
    editCell(6, '18')
    cy.get('.nb-checkmark').click()
    //check user data
    const editedUserData = ['100', 'Anna', 'Simpson', 'Anna_Simpson', 'asimpson@test.com', '18']
    editedUserData.forEach((value, index) => {
      cy.get(`tbody > :nth-child(1) > :nth-child(${index + 2})`).should('contain', value)
    })
  })
})