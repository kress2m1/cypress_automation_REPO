/// <reference types="cypress" />

describe("test", function() {

    before(function() {
        cy.fixture("newUserDetails").then(function(data){
            this.data=data
        })
    })

    it("Navigate to the landing page and creates a new account", function() {
        cy.visit("https://demo.nopcommerce.com/")

        //cy.contains("Log in").click()
        cy.get("a[class='ico-login']").click()

        cy.login(this.data.email, this.data.password)

        //cy.get("#Email").type(this.data.email)

        //cy.get("#Password").type(this.data.password)

        cy.get("button[class='button-1 login-button']").click()

        cy.get("button[type='submit']").should("have.attr", "class", "button-1 search-box-button")

        cy.get("h2").should("have.class", "product-title")

        cy.get(".notmobile > :nth-child(1) > [href='/computers']").click()

        cy.get("img[alt='Picture for category Desktops']").click()

        //select element locator for all items displayed and loop through then add to cart

        //cy.get("h2[class='product-title']").each(($el, index, $list) => {
            //if($el.text().includes("Digital Storm")) {
              //  cy.get("button[class='button-2 product-box-add-to-cart-button']").eq(index).click()
            //}
        //})

        cy.SelectProductAndAddToCart("Digital Storm")
    })
})