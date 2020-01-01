describe('Title Slide', () => {
  it('should render the title', () => {
    cy.visit('/');

    cy.get('div.spectacle-content').should('contain', 'With Enough Confidence,You Can Move Fast');
  });
});
