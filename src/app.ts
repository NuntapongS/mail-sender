import express from "express";

const main = () => {
  const app = express();

  app.get("/api/health", (_, res) => {
    res.status(200).json({ message: "YOU GOT IT" });
  });

  return app;
};

export default main;
