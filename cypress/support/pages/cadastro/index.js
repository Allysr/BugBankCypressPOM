import { ELEMENTOS as elemento } from "./elementos.js";
import dadosLogin from "../../../fixtures/dadosLogin.json";

class Cadastro {
  realizarCadastro() {
    cy.get(elemento.botaoRegistrar).click();
    cy.get(elemento.email).type(dadosLogin.email, { force: true });
    cy.get(elemento.nome).type(dadosLogin.nome, { force: true });
    cy.get(elemento.senha).type(dadosLogin.senha, { force: true });
    cy.get(elemento.confirmarSenha).type(dadosLogin.senha, { force: true });
    cy.get(elemento.botaoCadastrar).click({ force: true });
    cy.get(elemento.botaoFecharModal).click();
  }
}

export default new Cadastro();
