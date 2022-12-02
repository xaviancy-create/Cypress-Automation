


describe('My test suite', function()
{
    it('verify the title of the page', ()=>
    {
        cy.visit('https://www.flipkart.com')
        cy.xpath("//div[text()='Premium Non-Geared Cycles']").click()
        cy.xpath("//*[@id='container']/div/div[3]/div/div[2]/div[2]/div/div[1]/div/a[2]").invoke('removeAttr',"target").click()
        //cy.xpath("//button[text()='ADD TO CART']").click({force:true})

        
    })
})