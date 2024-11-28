Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
  });
  
  describe('Login Test Case', () => {
    it('LGN-001', () => {
      // Visit the login page
      cy.visit('http://127.0.0.1:8000/login');
      
      // Check that the email field exists, then type email
      cy.get('#email').should('exist').type('admin@gmail.com');
      cy.get('#email').should('have.value', 'admin@gmail.com');
      
      // Check that the password field exists, then type password
      cy.get('#password').should('exist').type('12345678');
      cy.get('#password').should('have.value', '12345678');
      
      // Click the Login button
      cy.contains('Login').click();
      
      // Check if the redirected URL includes the expected path
      cy.url().should('include', 'http://127.0.0.1:8000/');
    });
});
