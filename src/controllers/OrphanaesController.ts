import { Request, Response } from "express";
import { AppDataSource } from "../connection";
import { Orphanages } from "../entity/Orphanages";

export default {
  async create(req: Request, res: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    const orphanage = new Orphanages();
    orphanage.name = name;
    orphanage.latitude = latitude;
    orphanage.longitude = longitude;
    orphanage.about = about;
    orphanage.instructions = instructions;
    orphanage.opening_hours = opening_hours;
    orphanage.open_on_weekends = open_on_weekends;

    const orphanagesRepo = AppDataSource.getRepository(Orphanages);

    await orphanagesRepo.save(orphanage);

    const orphanages = await orphanagesRepo.find();

    return res
      .status(201)
      .json({ message: "O orfanato foi salvo.", orphanage });
  },

  async all(req: Request, res: Response) {
    const orphanagesRepo = AppDataSource.getRepository(Orphanages);
    const orphanages = await orphanagesRepo.find();

    return res.status(200).json(orphanages);
  },

  async one(req: Request, res: Response) {
    const orphanagesRepo = AppDataSource.getRepository(Orphanages);

    const id = parseInt(req.params.id);
    const orphanage = await orphanagesRepo.findOne({
      where: { id },
    });

    if (!orphanage) {
      return res
        .status(404)
        .json({ message: "Orfanato com o id informado não encontrado" });
    }

    return res.status(200).json(orphanage);
  },

  async delete(req: Request, res: Response) {
    const orphanagesRepo = AppDataSource.getRepository(Orphanages);

    const id = parseInt(req.params.id);
    const orphanage = await orphanagesRepo.findOne({
      where: { id },
    });

    if (orphanage) {
      await orphanagesRepo.delete(id);
      return res.status(200).json({ message: "deletado com sucesso" });
    } else {
      return res.status(404).json({ message: "orfanato não encontrado" });
    }
  },
};
