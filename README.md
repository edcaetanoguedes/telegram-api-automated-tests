# Testes Automatizados; Telegram Chat/Bot

<img src="https://img.shields.io/badge/Status-EM_CONSTRUÇÃO-00FF00" width="150" height="25" />

Autor [Ednaldo Guedes](https://github.com/edcaetanoguedes)

Este é o repositório de testes das aplicações telegram-*.

## Objetivo

Estudo e aprimoramento de microsserviços com foco em APi.

## Funcionalidades

- **Backend**: API Restful de Chat/Bot da API Telegram.
- **Teste de regressão**: Testes para garantir que os recursos continuam funcionando após cada ciclo.

## Estágios do projeto

Fase 1:  
- [ ] Definição de Requisitos.
- [ ] Definição de Recursos/Skills.
- [ ] Bibliotecas/dependências.
- [ ] Estrutura do projeto.
- [ ] Rotas da aplicação.
- [ ] Redação inicial do README.

Fase 2:  
- [ ] Implementação inicial.
- [ ] Implementação de funcionalidades.

Fase 3:  
- [ ] Testes automatizados.

Fase 4:  
- [ ] Relatório: Análise/Revisão do projeto.

## Instalação

**AVISO**: Execute o Backend, depois o Frontend e então os testes.

### Backend

- ### Clone do repositório
  - Execute `git clone https://github.com/edcaetanoguedes/telegram-api-backend.git`.
  - Acesse a pasta do repositório `cd telegram-api-backend`.
  - Execute `npm install` para instalar as dependências.
- ### Rodando o projeto
  - Execute `npm run dev`.
  - Por padrão o backend. Rodará em [http://localhost:4000](http://localhost:4000).

- ### Testes:
  - ### Clone do repositório
    - Execute `git clone https://github.com/edcaetanoguedes/telegram-api-automated-tests.git`.
    - Acesse a pasta do repositório `cd telegram-api-automated-tests`.
    - Execute `npm install` para instalar as dependências.
  - ### Rodando os testes
  - `npm run test:cy:open` Roda a interface.
  - `npm run test:all` Roda tudo em terminal.

## Branchs

| Nome da branch | Finalidade                                                             |
| -------------- | ---------------------------------------------------------------------- |
| `main`         | Branch principal (padrão moderno)                                      |
| `master`       | Antigo nome padrão para a branch principal                             |
| `develop`      | Usada como branch principal de desenvolvimento (Git Flow)              |
| `release`      | Branch usada para preparar uma versão de produção                      |
| `hotfix`       | Correções rápidas diretamente na produção                              |
| `feature/xyz`  | Nova funcionalidade (branch temporária baseada em `develop` ou `main`) |
| `bugfix/xyz`   | Correção de bugs em desenvolvimento                                    |
| `test`         | Branch usada para testes temporários                                   |
| `staging`      | Pré-produção (ambiente intermediário entre dev e produção)             |

## Commits

| Nome do commit | Finalidade                                                                    |
| -------------- | ----------------------------------------------------------------------------- |
| `feat`         | nova funcionalidade                                                           |
| `fix`          | correção de bug                                                               |
| `chore`        | tarefas gerais que não afetam o código em produção (install, configs, linter) |
| `docs`         | mudanças na documentação                                                      |
| `style`        | formatação, ponto e vírgula, espaços em branco, etc.                          |
| `refactor`     | refatoração de código (sem nova funcionalidade ou bug fix)                    |
| `test`         | adição ou ajuste de testes                                                    |

## Licença

Este projeto está sob licensa MIT - veja o arquivo [LICENSE.md](https://github.com/edcaetanoguedes/telegram-api-automated-tests/license)

## Agradecimentos

- Gostou do projeto? Achou legal? Peça a gentileza de dar uma estrela no projeto, um comentário. Assim poderei ter
  métricas de relevância do projeto.

- Qualquer pessoa interessada no projeto, faça bom uso. Seja para estudo, prática ou curiosidade mesmo.

- Tem um projeto legal em mente e precisa de ajuda? Chama! Quem sabe não trabalhamos juntos.

## Bom proveito!
