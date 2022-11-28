import { NextFunction, Request, Response } from "express";
import { IMailService } from "./mail.service";

export const sendMailHandler =
  (svc: IMailService) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const mail = req.body;
    try {
      await svc.sendMail(mail);
      res.status(200).send({ message: "Mail sent!" });
    } catch (err) {
      console.error(err);
      next(err);
    }
  };
