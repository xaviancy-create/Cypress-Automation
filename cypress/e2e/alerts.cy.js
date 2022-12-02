describe('Alertacceptance', function(){

    it('Alert testcases', function(){

        cy.visit("https://omayo.blogspot.com/")
        cy.get("#alert1").click()
       
        cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello')
        })
        cy.get("#confirm").click()
        cy.off('window:confirm', (str)=>{
            expext(str).to.equal('Press OK to confirm')
        })


})


})