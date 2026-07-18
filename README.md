# DevApply API

API criada com Node.js e Express para organizar candidaturas de emprego, vagas salvas e progresso em processos seletivos.

## Objetivo do projeto

Este projeto está sendo desenvolvido como parte do meu aprendizado em backend, com foco em Node.js, Express, APIs REST e banco de dados relacional.

## Funcionalidades implementadas

- Servidor Express configurado
- Rota de saúde da API: `GET /health`
- Lista inicial de vagas em memória
- Rota para listar vagas: `GET /jobs`
- Rota para criar uma nova vaga: `POST /jobs`
- Rota para buscar uma vaga pelo ID: `GET /jobs/:id`
- Rota para atualizar parcialmente uma vaga: `PATCH /jobs/:id`
- Rota para deletar uma vaga: `DELETE /jobs/:id`
- Validação dos dados ao criar uma vaga
- Status permitidos: `saved`, `applied`, `interview`, `test`, `rejected`, `approved`
- Validação dos dados ao atualizar uma vaga
- Organização das rotas em arquivo separado
- Separação dos dados em módulo próprio
- Separação da lógica de vagas em controllers
- Separação entre configuração da aplicação (`app.js`) e inicialização do servidor (`server.js`)

## Rotas da API

### GET /health

Verifica se a API está rodando.

### GET /jobs

Lista todas as vagas cadastradas em memória.

### POST /jobs

Cria uma nova vaga.

Exemplo de corpo da requisição:

```json
{
  "company": "Tech Example",
  "role": "Backend Developer Intern",
  "status": "applied"
}
```

## Stacks

- Node.js
- Express
- JavaScript

## Ferramentas de Desenvolvimento

````md
- Nodemon
- Thunder Client
````

## Como rodar o projeto

Instale as dependências:

```bash
npm install
```

Rode em desenvolvimento:

```bash
npm run dev
```

Rode em modo normal:

```bash
npm start
```
