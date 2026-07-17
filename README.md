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

## Tecnologias usadas até agora

- Node.js
- Express
- JavaScript
```
