// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Front-End Test');
  });

  it('Visits the app mylist page', () => {
    cy.visit('/mylist');
    cy.contains('h1', 'My List');
  });

  it('watch card should be seen', () => {
    cy.get('.watch').should('be.visible');
  });

  it('selected watch card should have opacity', () => {
    cy.get('.watch.is-selected').should('not.be.visible');
  });
});
