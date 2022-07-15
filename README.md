# 2022JulhoRocketseat_Desafio01-Intro_SOLID
Trilha NodeJS - Ignite: ChapterII: Desafio 01 - Introdução ao SOLID

## Rotas da aplicação

### POST `/users`

A rota deve receber `name`, e `email` dentro do corpo da requisição para que seja possível cadastrar um usuário.

### PATCH `/users/:user_id/admin`

A rota deve receber, nos parâmetros da rota, o `id` de um usuário e transformar esse usuário em admin.

### GET `/users/:user_id`

A rota deve receber, nos parâmetros da rota, o `id` de um usuário e devolver as informações do usuário encontrado pelo corpo da resposta.

### GET `/users`

A rota deve receber, pelo header da requisição, uma propriedade `user_id` contendo o `id` do usuário e retornar uma lista com todos os usuários cadastrados. O `id` deverá ser usado para validar se o usuário que está solicitando a listagem é um admin. O retorno da lista deve ser feito apenas se o usuário for admin.


# Swagger
## Preparando ambiente para documentação

Como visto na aulas, você precisa configurar o ambiente para a documentação da sua aplicação. As etapas que você deve seguir é:

- Instalar a lib `swagger-ui-express`;
- Criar um arquivo JSON para você escrever a documentação na especificação OpenAPI 3.0;
- Instanciar na sua aplicação uma rota `api-docs` que vai servir a sua documentação.

## O que eu devo documentar?

A documentação deve servir como uma descrição das entradas e saídas da sua API. Abaixo sugerimos os principais pontos que você deve documentar:

- Informações gerais da API (nome, descrição, etc.);
- Rotas;
- Parâmetros;
- Corpo da Requisição;
- Respostas de sucesso;
- Respostas de erro;
- Exemplos.

Fique a vontade para documentar mais informações caso deseje.
