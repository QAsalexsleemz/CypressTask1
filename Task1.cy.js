describe('LOGIN',()=>{

    it('standard user',()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.wait(3000)
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.wait(4000)
        cy.get('[data-test="login-button"]').click()
        cy.screenshot()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.screenshot()
        
        
        
        })
})