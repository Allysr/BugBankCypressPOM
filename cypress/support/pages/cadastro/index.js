const elemento = require("./elements").ELEMENTS;

class Cadastro {
    realizarCadastro(){
        cy.get(elemento.botaoRegistrar).click()
        cy.get(elemento.email).type(Cypress.env('email'), {force: true})
        cy.get(elemento.nome).type('Teste', {force: true})
        cy.get(elemento.senha).type(Cypress.env('senha'),{force:true},)
        cy.get(elemento.confirmarSenha).type(Cypress.env('senha'), {force: true})
        cy.get(elemento.botaoCadastrar).click({force:true})
        cy.get(elemento.botaoFecharModal).click()
    }
}

export default new Cadastro();