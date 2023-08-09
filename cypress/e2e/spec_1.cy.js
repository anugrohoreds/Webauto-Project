describe("Magento Project",()=>{

    it("Sign-Up 1",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Create an Account").click()
        cy.get("#firstname").type("Jeff")
        cy.get("#lastname").type("Scott")
        cy.get("#email_address").type("jeffscott@gmail.com")
        cy.get("#password").type("@Jeffscot12345")
        cy.get("#password-confirmation").type("@Jeffscott12345")
        cy.get("#form-validate > .actions-toolbar > div.primary > .action > span").click()
    })

    it("Sign-Up 2",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Create an Account").click()
        cy.get("#firstname").type("Jeff")
        cy.get("#email_address").type("jeffscott@gmail.com")
        cy.get("#password").type("@Jeffscot12345")
        cy.get("#password-confirmation").type("@Jeffscott12345")
        cy.get("#form-validate > .actions-toolbar > div.primary > .action > span").click()
    })

     it("Sign-Up 3",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Create an Account").click()
        cy.get("#lastname").type("Scott")
        cy.get("#email_address").type("jeffscott@gmail.com")
        cy.get("#password").type("@Jeffscot12345")
        cy.get("#password-confirmation").type("@Jeffscott12345")
        cy.get("#form-validate > .actions-toolbar > div.primary > .action > span").click()
    })

    it("Sign-Up 4",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Create an Account").click()
        cy.get("#firstname").type("Jeff")
        cy.get("#lastname").type("Scott")
        cy.get("#email_address").type("jeffscott")
        cy.get("#password").type("@Jeffscot12345")
        cy.get("#password-confirmation").type("@Jeffscott12345")
        cy.get("#form-validate > .actions-toolbar > div.primary > .action > span").click()
    })

    it("Sign-Up 5",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Create an Account").click()
        cy.get("#firstname").type("Jeff")
        cy.get("#lastname").type("Scott")
        cy.get("#email_address").type("jeffscott@gmail.com")
        cy.get("#password").type("1")
        cy.get("#password-confirmation").type("@Jeffscott12345")
        cy.get("#form-validate > .actions-toolbar > div.primary > .action > span").click()
    })

    it("Sign-Up 6",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Create an Account").click()
        cy.get("#firstname").type("Jeff")
        cy.get("#lastname").type("Scott")
        cy.get("#password").type("@Jeffscot12345")
        cy.get("#password-confirmation").type("@Jeffscott12345")
        cy.get("#form-validate > .actions-toolbar > div.primary > .action > span").click()
    })

    it("Sign-Up 7",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Create an Account").click()
        cy.get("#firstname").type("Jeff")
        cy.get("#lastname").type("Scott")
        cy.get("#email_address").type("jeffscott@gmail.com")
        cy.get("#password").type("@Jeffscot12345")
        cy.get("#password-confirmation").type("uedkejdk")
        cy.get("#form-validate > .actions-toolbar > div.primary > .action > span").click()
    })

    it("Sign-Up 8",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Create an Account").click()
        cy.get("#email_address").type("jeffscott@gmail.com")
        cy.get("#password").type("@Jeffscot12345")
        cy.get("#password-confirmation").type("@Jeffscott12345")
        cy.get("#form-validate > .actions-toolbar > div.primary > .action > span").click()
    })

    it("Sign-Up 9",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Create an Account").click()
        cy.get("#firstname").type("Jeff")
        cy.get("#lastname").type("Scott")
        cy.get("#password-confirmation").type("@Jeffscott12345")
        cy.get("#form-validate > .actions-toolbar > div.primary > .action > span").click()
    })

    it("Sign-Up 10",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Create an Account").click()
        cy.get("#firstname").type("Jeff")
        cy.get("#lastname").type("Scott")
        cy.get("#email_address").type("jeffscott@gmail.com")
        cy.get("#password").type("@Jeffscot12345")
        cy.get("#form-validate > .actions-toolbar > div.primary > .action > span").click()
    })

    it("Sign-Up 11",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Create an Account").click()
        cy.get("#firstname").type("Jeff")
        cy.get("#lastname").type("Scott")
        cy.get("#email_address").type("jeffscott@gmail.com")
        cy.get("#password").type("@Jeffscot12345")
        cy.get("#password-confirmation").type("@Jeffscott12345")
    })

    it("Sign-Up 12",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Create an Account").click()
        cy.get("#form-validate > .actions-toolbar > div.primary > .action > span").click()
    })
})