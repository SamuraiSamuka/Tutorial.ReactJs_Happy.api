import express from "express";
import { AppDataSource } from "./connection";
import routes from "./routes";

AppDataSource.initialize()
  .then(async () => {
    const app = express();
    app.use(express.json()); // sem isso o express não entende o json que vim no body da requisição, retornando 'undefined' -> este é um 'plugin'
    app.use(routes);

    app.listen(3333);

    console.log("O Servidor e a base de dados foram inicializados!");
  })
  .catch((err) =>
    console.log("Erro durante a inicialização da base de dados!", err)
  );
