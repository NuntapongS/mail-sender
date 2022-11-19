import express from "express";
import appRoutes from "./routes/app.routes";

const main = () => {
  const app = express();

  app.get("/api/health", (req, res) => {
    res.status(200).send("You are healthy!");
  });

  app.use("/api", appRoutes);

  return app;
};

export default main;
