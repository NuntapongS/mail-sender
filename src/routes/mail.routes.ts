import express from "express";
import MailController from "../controller/mail.controller";

export const mailRoutes = express.Router();

mailRoutes.post("/sendmail", new MailController().sendMail);
