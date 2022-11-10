import express from "express";

const main = () => {
  const app = express();

  app.use((err, _, res, __) => {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  });

  app.get("/api/health", (_, res) => {
    res.status(200).json({ message: "YOU GOT IT" });
  });

  return app;
};

export default main;
