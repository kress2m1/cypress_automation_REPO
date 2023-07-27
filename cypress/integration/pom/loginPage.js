class loginPage{
    getAccountLoginButton(){
        return cy.get("button[class='button-1 login-button']")
    }
}

export default loginPage;