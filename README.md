<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

execute as migrations 
```bash
$ npm run typeorm -- -d ./src/infra/repository/db/typeOrm.migration-config.ts migration:run
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Compile with docker and run the project
```bash
# development
docker-compose up -d
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## acesse a documentação da api pelo swagger

```bash
http://localhost:3000/api
```

# Escopo do Projeto

## Objetivo:
Desenvolver uma API RESTful em Node.js para gerenciar cursos, estudantes, tarefas e atividades, incluindo funcionalidades específicas de agendamento de atividades, seguindo regras de negócio precisas.

## Tecnologias:
- **Backend**: Node.js com Express ou NestJS.
- **Banco de Dados**: PostgreSQL.
- **ORM/Query Builder**: Sequelize, TypeORM (para NestJS) ou outra biblioteca de preferência do candidato.
- **Migrations**: Ferramenta de migrations do ORM escolhido.

# Requisitos Funcionais

1. **CRUD de Cursos**:
   - Atributos: \`id\` (UUID), \`nome\` (string).
   - Rotas: Criar, listar, atualizar e deletar cursos.

2. **CRUD de Estudantes**:
   - Atributos: \`cpf\` (string, único), \`nome\` (string), \`curso\` (relacionado a Cursos), \`matrícula\` (string, único).
   - Rotas: Criar, listar, atualizar e deletar estudantes.

3. **CRUD de Tarefas**:
   - Atributos: \`id\` (UUID), \`nome\` (string).
   - Rotas: Criar, listar, atualizar e deletar tarefas.

4. **CRUD de Atividades**:
   - Atributos: \`id\` (UUID), \`tarefa\` (relacionado a Tarefas), \`estudante\` (relacionado a Estudantes), \`data\` (date), \`hora agendamento inicio\` (time), \`hora agendamento término\` (time), \`hora início\` (time, opcional), \`hora término\` (time, opcional).
   - Rotas: Criar, listar, atualizar e deletar atividades. Incluir rotas para iniciar e finalizar uma atividade (modificar \`hora início\` e \`hora término\`).

5. **Regras de Agendamento**:
   - A duração da atividade não pode ultrapassar 6 horas.
   - Data e hora de término não podem ser anteriores à data e hora de início.
   - Uma atividade só pode ser iniciada com uma tolerância de 15 minutos para mais ou para menos.
   - Uma atividade pode ser encerrada a qualquer momento após o início.

# Requisitos Não Funcionais

1. **Segurança**: Implementar medidas básicas de segurança, como validação de entradas para prevenir injeção SQL.
2. **Documentação**: Documentar as rotas da API com Postman ou similar.
3. **Código e Estrutura do Projeto**: Código limpo, bem organizado e seguindo as melhores práticas de desenvolvimento em Node.js.

# Entrega

- Código-fonte em um repositório Git (privado ou público, conforme preferência da organização).
- Instruções de configuração e execução do projeto, incluindo como rodar as migrations e os testes.

## Prazo de Entrega Inicial:
O prazo de entrega para o projeto é de 7 dias a partir da data de recebimento deste teste. Acreditamos que esse prazo é suficiente para concluir as tarefas propostas, considerando um planejamento e gestão de tempo eficazes.

## Solicitação de Extensão de Prazo:
Entendemos que imprevistos podem ocorrer e que cada desenvolvedor tem um ritmo de trabalho. Caso precise de mais tempo para concluir o projeto, é possível solicitar uma extensão do prazo. No entanto, pedimos que nos informe até o 6º dia do prazo inicial, incluindo um argumento sólido que justifique a necessidade de mais tempo.
