class registrationPage{

    getGenderMale(){
        return cy.get("#gender-male")
    }

    getGenderFemale(){
        return cy.get("#gender-female")
    }

    getFirstName(){
        return cy.get("#FirstName")
    }

    getLastName(){
        return cy.get("#LastName")
    }

    getDayOfBirth(){
        return cy.get("select[name='DateOfBirthDay']")
    }

    getMonthOfBirth(){
        return cy.get("select[name='DateOfBirthMonth']")
    }

    getYearOfBirth(){
        return cy.get("select[name='DateOfBirthYear']")
    }

    getEmail(){
        return cy.get("#Email")
    }

    getCompany(){
        return cy.get("#Company")
    }

    getNewsletter(){
        return cy.get("#Newsletter")
    }

    getPassword(){
        return cy.get("#Password")
    }

    getConfirmPassword(){
        return cy.get("#ConfirmPassword")
    }

    getRegisterButton(){
        return cy.get("#register-button")
    }

    getWElcomeMessage(){
        return cy.get('.result').contains("Your registration completed")
    }
}

export default registrationPage;