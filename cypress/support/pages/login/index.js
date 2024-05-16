// ações de interação com a página //

import { ELEMENTOS as elemento } from "./elementos";

class Login {
  preencherLogin(email, senha) {
    cy.get(elemento.email).type(email);
    cy.get(elemento.senha).type(senha, { log: false });
  }

  preencherEmail(email) {
    cy.get(elemento.email).type(email);
  }

  preencherSenha(senha) {
    cy.get(elemento.senha).type(senha, { log: false });
  }

  clicarBotaoAcessar() {
    cy.get(elemento.botaoAcessar).click();
  }

  clicarBotaoFecharModal() {
    cy.get(elemento.botaoFecharModal).click();
  }

  clicarBotaoXModal() {
    cy.get(elemento.botaoXModal).click();
  }

  clicarBotaoOlhinho() {
    cy.get(elemento.botaoOlhinho).click();
  }

  
}

export default new Login();
