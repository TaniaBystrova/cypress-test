describe('JSONPlaceholder API Tests', () => {
    const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
  
    it('Get post by id', () => {
      const postId = 1
      cy.request(`${BASE_URL}/${postId}`)
        .its('body')
        .should('include', { id: postId })
    })
    it('Get posts list', () => {
        cy.request(BASE_URL)
          .its('body')
          .should('have.length.greaterThan', 0)
          .and('not.be.empty')
          .each((post) => {
            expect(post).to.have.all.keys('userId', 'id', 'title', 'body')
          })
      })

      it('Create new post', () => {
        const newPost = {
          title: 'My Title',
          body: 'bar',
          userId: 1
        };
        cy.request('POST', BASE_URL, newPost)
          .its('body')
          .should((response) => {
            expect(response).to.include(newPost)
            expect(response.id).to.be.a('number')
          })
      })
      it('Update post by id', () => {
        const postId = 1;
        const updatedPost = {
          id: postId,
          title: 'Updated title',
          body: 'Updated body',
          userId: 1
        }
        cy.request('PUT', `${BASE_URL}/${postId}`, updatedPost)
          .its('body')
          .should('deep.equal', updatedPost)
      })
    
      it('Delete post by id', () => {
        const postId = 1
        cy.request('DELETE', `${BASE_URL}/${postId}`)
          .its('status')
          .should('equal', 200)
      })
    })
