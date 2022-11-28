import main from "./app";
import { IMailService, mailService } from "./mail/mail.service";

const port = process.env.PORT ?? "8000";

export interface IAppDependencies {
  mailService: IMailService;
}

export const initDependencies = (): IAppDependencies => ({
  mailService: mailService(),
});

const start = () => {
  const dependencies = initDependencies();
  const app = main(dependencies);

  app.listen(port, () => {
    console.info(
      `Server start at http://localhost:${port}\nEnvironment: ${
        process.env.NODE_ENV ?? "local"
      }\nTime: ${new Date().toISOString()}`
    );
  });
};

start();
