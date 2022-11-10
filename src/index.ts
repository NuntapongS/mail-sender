import main from "./app";

const start = () => {
  const app = main();

  app.listen(8000, () => {
    console.log("Server started on port 8000");
  });
};

start();
