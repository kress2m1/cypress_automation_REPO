class computersPage{
    getComputersImage(){
        return cy.get("img[alt='Picture for category Desktops']")
    }

    selectAndBuyComputer(computerType){
        return cy.SelectProductAndAddToCart(computerType)
    }
}

export default computersPage;