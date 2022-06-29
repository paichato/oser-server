import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "database",
  port: 5432,
  username: "docker",
  password: "ignite",
  database: "rentx",
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: ["./src/database/migrations"],
  subscribers: [],
});

// import { AppDataSource } from "./data-source";
// import { User } from "./entity/User";
