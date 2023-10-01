import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  entities: [],
  subscribers: [],
  migrations: ["./migrations/*.ts"],
});
