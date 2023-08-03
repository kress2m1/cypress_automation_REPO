class envPage{
    getQaURL(){
        return cy.visit(Cypress.env("qaURL"))
    }

    getDevURL(){
        return cy.visit(Cypress.env("devURL"))
    }

    getStagingURL(){
        return cy.visit(Cypress.env("stagingURL"))
    }
}

export default envPage;