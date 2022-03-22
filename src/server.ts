import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";
import config from "./database";

const PORT = 3000;

createConnection(config)
  .then(() => {
    console.log("Database connected!");

    app.listen(PORT, () => {
      console.log("Server running!");
    });
  })
  .catch((error) => console.log(error));
