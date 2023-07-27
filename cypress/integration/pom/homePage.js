class homePage{
    getLoginButton(){
        return cy.get("a[class='ico-login']")
    }
}

export default homePage;