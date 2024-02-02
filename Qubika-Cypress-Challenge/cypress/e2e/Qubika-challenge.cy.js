describe('Qubika Website Test', () => {
    it('should validate website elements and contact form functionality', () => {
      // Navigate to Qubika Website
      cy.visit('https://qubika.com/');
  
      // Validate URL
      cy.url().should('eq', 'https://qubika.com/');

      //Acept cookies
      cy.get('.cky-notice-btn-wrapper > .cky-btn-accept')
  
      // Validate Qubika logo
      cy.get('.logo').should('be.visible');
  
      // Click 'Contact us' button
      cy.get('.text-wrapper > .button').click();
  
      // Wait for contact form to be visible
      cy.get('.modal').should('be.visible');
  
      // Validate Name field is displayed
      cy.get('#firstname-5e204c31-ede2-4976-a096-6919a081b2df').should('be.visible');
  
      // Validate Email field is displayed
      cy.get('#email-5e204c31-ede2-4976-a096-6919a081b2df').should('be.visible');
  
      // Validate 'Get in touch' button is displayed
      cy.get('.hs-button').should('be.visible');
  
      // Click 'Get in touch' button without filling any field
      cy.get('.hs-button').click();
  
      // Validate that all mandatory fields have an error message
      cy.get('.error-message').should('have.length', 2);
  
      // Validate that only 'Name' field is marked with red color
      cy.get('#name').should('have.css', 'border-color', 'rgb(255, 0, 0)');
  
      // Write 'Test name' on the 'Name' field
      cy.get('#name').type('Test name');
  
      // Click 'Get in touch' button
      cy.get('.hs-button').click();
  
      // Validate that all mandatory fields have an error message except 'Name' field
      cy.get('.error-message').should('have.length', 1);
  
      // Validate that only 'Email' field is marked with red color
      cy.get('#email').should('have.css', 'border-color', 'rgb(255, 0, 0)');
    });
  });
  
  