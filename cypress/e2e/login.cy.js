describe("Magento Project",()=>{

    it("Login Pertama",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Sign In").click()
        cy.get("#email").type("jeffscott@gmail.com")
        cy.get("#pass").type("@Jeffscott12345")
        cy.get("#send2").click()
    })

    it("Login Kedua",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Sign In").click()
        cy.get("#email").type("jeffscott")
        cy.get("#pass").type("@Jeffscott12345")
        cy.get("#send2").click()
    })

    it("Login Ketiga",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Sign In").click()
        cy.get("#pass").type("@Jeffscott12345")
        cy.get("#send2").click()
    })

    it("Login Keempat",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Sign In").click()
        cy.get("#email").type("jeffscott@gmail.com")
        cy.get("#pass").type("3")
        cy.get("#send2").click()
    })

    it("Login Kelima",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Sign In").click()
        cy.get("#email").type("jeffscott@gmail.com")
        cy.get("#pass").type("dfjfjdfjf")
        cy.get("#send2").click()
    })

    it("Login Keenam",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Sign In").click()
        cy.get("#email").type("jeffscott@gmail.com")
        cy.get("#pass").type("@^&())$@#")
        cy.get("#send2").click()
    })

    it("Login Ketujuh",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Sign In").click()
        cy.get("#email").type("jeffscott@gmail.com")
        cy.get("#send2").click()
    })

    it("Login Kedelapan",()=>{
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.contains("Sign In").click()
        cy.get("#send2").click()
    })
})