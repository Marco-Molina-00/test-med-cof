# Descrição
O repositório tem como objetivo verificar o cadastro no Simulado Multimídia UNIFESP. É necessário que faça a configuração corretamente e siga as orientações para garantir a qualidade do software.

# Como instalar e executar
1. Clone o projeto
2. Utilize o comando `npm install` para instalar as dependências necessárias
3. Utilize o comando npx cypress open para abrir a aplicação. 
4. Acesse o link https://cloud.cypress.io/projects/e1zr4c para visualizar as evidencias



# Pré-requisitos
Antes de executar os testes Cypress, certifique-se de que o seguinte esteja configurado em seu ambiente de desenvolvimento:

- Node.js instalado ([Node.js](https://nodejs.org/))
- Cypress instalado globalmente ou localmente no projeto ([Cypress](https://www.cypress.io/))

# Estrutura do Projeto
O projeto de automação é organizado da seguinte forma:

- `cypress/e2e`: Esta pasta contém os arquivos de teste Cypress.
- `cypress/support`: Aqui esta armazenado, comandos personalizados e elementos separados por pagina.
- `cypress.json`: Arquivo de configuração Cypress para definir configurações globais.

#Script de teste

- validaFormularioSimulado verifica se o formulário está funcionando corretamente
- validaHomePage verifica se a página inicial está abrindo corretamente e carregando os itens
- validaPopupErro verifica se o popup de dados não preenchidos ou preenchidos incorretamente está sendo exibido e permanecendo na mesma tela 
