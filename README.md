<h1 align="center">
<br> Estudo de Cypress no site Bug Bank com Page Objects
</h1>

<div align="center">
<img width="800px" alt="Site para testes automatizados CuraHealthcare" src="https://i.imgur.com/Tmx5hQj.png" />
</div>
<br>

<h4 align="center">
  BDD's do login usados para realização dos testes no cypress:
</h4>

```diff  

• Sucesso ao fazer login
Dado que o usuário tenha cadastro
E insira os dados válidos
Quando clicar em 'acessar'
Deve redirecionar para a home.

• Falha ao fazer login
Dado que o usuário tenha cadastro
E insira nome ou senha inválidos
Quando clicar 'acessar'
Deve abrir o modal
E aparecer mensagem "Usuário ou senha inválido. Tente novamente ou verifique suas informações!".

• Campo do login vázio
Dado que o usário esteja tentando realizar o login
E não insira dados no <campo>
Quando clicar em 'acessar'
Deve aparecer a mensagem 'É campo obrigatório'.

• Botão "fechar" no modal em caso de falha de login
Dado que o usuário tenha preenchido os campos com dados inválidos
E tenha sido aberto o modal de erro
Quando clicar 'fechar'
Deve desaparecer o modal.

• Botão "x" no modal em caso de falha de login
Dado que o usuário tenha preenchido os campos com dados inválidos
E tenha sido aberto o modal de erro
Quando clicar no "x"
Deve desaparecer o modal.

• Visualizar a senha
Dado que o usário insira uma senha no login
E ela esteja escondida
Quando clicar no icone de "olhinho"
Deve aparecer a senha.

• Esconder senha
Dado que o usário insira uma senha no login
E ela esteja visivel
Quando clicar no icone de "olhinho"
Deve ocultar a senha.
```

<br>
Site utilizado: https://bugbank.netlify.app/#
<h1>


