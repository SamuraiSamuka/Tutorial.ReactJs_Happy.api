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
