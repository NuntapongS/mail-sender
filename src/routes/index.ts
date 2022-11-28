import { Router } from "express";
import { IAppDependencies } from "..";
import { sendMailHandler } from "../mail/mail.handler";

export const appRoutes =
  (dependencies: IAppDependencies) => (route: Router) => {
    route.post("/v1/smtp/mail", sendMailHandler(dependencies.mailService));
    return route;
  };
