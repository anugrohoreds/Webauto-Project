describe("Magento Project",()=>{

    it("Sign-Up",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Create an Account").click()
        cy.get("#firstname").type("Jeff")
        cy.get("#lastname").type("Scott")
        cy.get("#email_address").type("jeffscott@gmail.com")
        cy.get("#password").type("@Jeffscot12345")
        cy.get("#password-confirmation").type("@Jeffscott12345")
        cy.get("#form-validate > .actions-toolbar > div.primary > .action > span").click()
    })
})