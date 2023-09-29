### projeto iniciado

`npm init -y`

### Instalar e configurar o express e o typescript

```
npm i express
npm i @types/express -D
npm i typescript -D
npx tsc --init
```

### Configurar o nodeJs para entender ts

`npm i ts-node-dev -D`

### Configurar comando para rodar o projeto

`npm run dev (npx ts-node-dev src/server.ts)`

### Instalar e configurar o banco de dados

`npm i typeorm sqlite3`
`npm install reflect-metadata --save` (importar ``import "reflect-metadata"`)

#### Tipos de drivers de manipulação de bancos de dados

- Driver nativo - Fazer queries diretamente pelo banco de dados
- Query builder - Construtor de queries que usa uma linguagem mais amigável e depois transpila para linguagem SQL (ex.: knex.js - escreve queries por meio de javascript, como `knex('users').select('*')`)
- ORM (Object Relational Mapping) - Oferece alto nível de abstração. Relaciona o código da aplicação a tabelas dentro do banco de dados, criando uma relação direta. Permite usar os mesmos models para vários bancos de dados.
