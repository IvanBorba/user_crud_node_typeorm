import { ConnectionOptions } from "typeorm";
import { User } from "../entities";

const config: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "ivan",
  password: "101112",
  database: "node_sample",
  entities: [User],
  synchronize: true,
  logging: false,
};

export default config;
