import express from "express";

const main = () => {
  const app = express();

  app.get("/api/health", (req, res) => {
    res.status(200).send("You are healthy!");
  });

  return app;
};

export default main;
