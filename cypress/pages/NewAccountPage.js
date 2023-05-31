class NewAccountPage{
getFirstName(){
    return cy.get('#firstname');
}
getLastName(){
    return cy.get('#lastname');
}
getEmail(){
    return cy.get('#email_address');
}
getPassword(){
    return cy.get('#password');
}
getConfirmPassword(){
    return cy.get('#password-confirmation');
}
getCreateAnAccountBtn(){
    return cy.get('button[title="Create an Account"]');
}
}

export default new NewAccountPage();