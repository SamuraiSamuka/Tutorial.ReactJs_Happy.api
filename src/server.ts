import express from "express";
import { AppDataSource } from "./connection";

AppDataSource.initialize()
  .then(async () => {
    //
    const app = express();
    app.use(express.json()); // sem isso o express não entende o json que vim no body da requisição, retornando 'undefined' -> este é um 'plugin'

    app.get("/users", (req, res) => {
      return res.json({ message: "Hello World" });
    });

    app.listen(3333);
    console.log("O Servidor e a base de dados foram inicializados!");
  })
  .catch((err) =>
    console.log("Erro durante a inicialização da base de dados!", err)
  );

// Por padrão o node não roda typescript, por isso o código precisa ser transpilado.
// Antes de mais nada é preciso instalar o typescript -D, e rodar o comando 'tsc --init'
// Esse comando gera um arquivo de configuração para o compilador typescript
// Com o typescript instalado, instalamos agora a biblioteca 'ts-node-dev -D', que vai fazer nosso código .ts rodar no node.

// Query params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1  :id
// Body: http://localhost:3333/users

// app.post("/users/:id", (req, res) => {
//   console.log(req.query);
//   console.log(req.params);
//   console.log(req.body);

//   return res.json({ message: "Hello World 2" });
// });
