import express from "express";
import { AppDataSource } from "./connection";
import { Orphanages } from "./entity/Orphanages";

AppDataSource.initialize()
  .then(async () => {
    //
    const app = express();
    app.use(express.json()); // sem isso o express não entende o json que vim no body da requisição, retornando 'undefined' -> este é um 'plugin'

    app.post("/orphanages", async (req, res) => {
      const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
      } = req.body;

      // const orphanagesRepo = AppDataSource.getRepository(Orphanages);
      const orphanage = new Orphanages();
      orphanage.name = name;
      orphanage.latitude = latitude;
      orphanage.longitude = longitude;
      orphanage.about = about;
      orphanage.instructions = instructions;
      orphanage.opening_hours = opening_hours;
      orphanage.open_on_weekends = open_on_weekends;

      await AppDataSource.manager.save(orphanage);

      return res.json({ message: "O orfanato foi salvo.", orphanage });
    });

    app.listen(3333);
    console.log("O Servidor e a base de dados foram inicializados!");
  })
  .catch((err) =>
    console.log("Erro durante a inicialização da base de dados!", err)
  );
