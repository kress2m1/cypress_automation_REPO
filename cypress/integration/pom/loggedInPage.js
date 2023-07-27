class loggedInPage{
    getComputerHeader(){
        return cy.get(".notmobile > :nth-child(1) > [href='/computers']")
    }
}

export default loggedInPage;