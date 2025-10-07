describe('LOGIN',()=>{
    
    it('standard user',()=>{
        
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('equal','Swag Labs')
        cy.get('.login_logo').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible').and('be.empty').type('standard_user')
        cy.wait(2000)
        cy.get('#password').should('be.visible').and('be.empty').type('secret_sauce')
        cy.wait(3000)
        cy.screenshot()
        cy.get('.submit-button').should('be.visible').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.contains('Products').should('be.visible')
        cy.get('.inventory_list').should('exist')
        cy.get('.inventory_item').should('have.length.greaterThan', 5)
        cy.screenshot()
        
        
        
        })
})