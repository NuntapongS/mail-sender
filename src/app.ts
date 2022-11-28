import express, { Router } from "express";
import { IAppDependencies } from ".";
import { appRoutes } from "./routes";

const main = (dependencies: IAppDependencies) => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/api/health", (_, res) => {
    res.status(200).send("You are healthy!");
  });

  app.use("/api", appRoutes(dependencies)(Router()));

  return app;
};

export default main;
