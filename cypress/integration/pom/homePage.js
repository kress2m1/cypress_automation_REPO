class homePage{
    getLoginButton(){
        return cy.get("a[class='ico-login']")
    }

    getRegisterButton(){
        return cy.get(".ico-register")
    }
}

export default homePage;