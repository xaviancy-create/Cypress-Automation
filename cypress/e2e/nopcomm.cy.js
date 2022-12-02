

describe('Locating element', () =>{

    before (function(){
        cy.fixture('example').then(function(data){
            this.data=data
        })
    })
    it('verify types of locators', function() {
        cy.visit("https://demo.nopcommerce.com/")
        //cy.xpath("//input[@id='small-searchterms']").type("Nokia Lumia 1020")
        
        cy.xpath("//input[@id='small-searchterms']").type("Nokia Lumia 1020")
        cy.wait(2000)
        cy.get("[type='submit']").click()
        cy.get("h1").should('have.text', "Search")
        cy.xpath("//button[text()='Add to cart']").click()
        cy.xpath("//span[text()='Shopping cart']").click()
        cy.get("h1").should('have.text',"Shopping cart")
        cy.get(".product-name").should('have.text',"Nokia Lumia 1020")
        cy.get("#checkout_attribute_1").select("Yes [+$10.00]").should('have.value',"2")
        cy.xpath("//input[@id='termsofservice']").check().should('be.checked')
        cy.get("#checkout").click()
        cy.get("#Email").type(this.data.email)
        cy.get("#Password").type(this.data.password)
        cy.xpath("//button[text()='Log in']").click()
    
       



       
    })
})