import express from "express";

const port = process.env.PORT ?? "8000";

const main = () => {
  const app = express();

  app.listen(port, () => {
    console.info(
      `Server start at http://localhost:${port}\nEnvironment: ${
        process.env.NODE_ENV ?? "local"
      }\nTime: ${new Date().toISOString()}`
    );
  });

  return app;
};

export default main;
