## Documentação

### Projeto iniciado

`npm init -y`

### Express e typescript instalados e configurados

```
npm i express
npm i @types/express -D
npm i typescript -D
npx tsc --init
```

### NodeJs configurado para entender ts

`npm i ts-node-dev -D`

### Comando para rodar o projeto configurado

`npm run dev -> npx ts-node-dev --transpile-only --ignore-watch node_modules src/server.ts`

### Banco de dados instalado e configurado

```
npm i typeorm sqlite3
npm install reflect-metadata --save
```

(importar "reflect-metadata")

### Migrations

`npm run typeorm migration:create ./src/migrations/create_orphanages`
`npm run typeorm migration:run -- -d ./src/connection.ts`

### Upload de imagens

`npm i multer`

## Anotações

### Tipos de drivers de manipulação de bancos de dados

- Driver nativo - Fazer queries diretamente pelo banco de dados
- Query builder - Construtor de queries que usa uma linguagem mais amigável e depois transpila para linguagem SQL (ex.: knex.js - escreve queries por meio de javascript, como `knex('users').select('*')`)
- ORM (Object Relational Mapping) - Oferece alto nível de abstração. Relaciona o código da aplicação a tabelas dentro do banco de dados, criando uma relação direta. Permite usar os mesmos models para vários bancos de dados.

### Typescript e nodeJS

Por padrão o node não roda typescript, por isso o código precisa ser transpilado.
Antes de mais nada é preciso instalar o typescript -D, e rodar o comando 'tsc --init'
Esse comando gera um arquivo de configuração para o compilador typescript
Com o typescript instalado, instalamos agora a biblioteca 'ts-node-dev -D', que vai fazer nosso código .ts rodar no node.

### Parâmetros de rota e de busca

Parâmetros de busca (Query params): http://localhost:3333/users?search=diego
Parâmetros de rota (Route Params): http://localhost:3333/users/1 :id
Parâmetros do corpo da requisição (Body): http://localhost:3333/users

```
app.post("/users/:id", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);

  return res.json({ message: "Hello World 2" });
});
```

### Padrão MVC

- Models - Entities
- Views - Endpoints
- Controllers - Lógica das rotas
