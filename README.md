### Projeto iniciado

`npm init -y`

### Express e typescript instalados e configurados

```
npm i express
npm i @types/express -D
npm i typescript -D
npx tsc --init
```

### NodeJs configurar para entender ts

`npm i ts-node-dev -D`

### Comando para rodar o projeto configurado

`npm run dev (npx ts-node-dev src/server.ts)`

### Banco de dados instalado e configurado

```
npm i typeorm sqlite3
npm install reflect-metadata --save
```

(importar "reflect-metadata")

#### Tipos de drivers de manipulação de bancos de dados

- Driver nativo - Fazer queries diretamente pelo banco de dados
- Query builder - Construtor de queries que usa uma linguagem mais amigável e depois transpila para linguagem SQL (ex.: knex.js - escreve queries por meio de javascript, como `knex('users').select('*')`)
- ORM (Object Relational Mapping) - Oferece alto nível de abstração. Relaciona o código da aplicação a tabelas dentro do banco de dados, criando uma relação direta. Permite usar os mesmos models para vários bancos de dados.
