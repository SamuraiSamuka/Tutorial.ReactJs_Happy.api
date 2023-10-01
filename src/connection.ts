import "reflect-metadata";
import { DataSource } from "typeorm";
import { Orphanages } from "./entity/Orphanages";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  entities: [Orphanages],
  subscribers: [],
  migrations: ["src/migrations/*.ts"],
  synchronize: true,
});
