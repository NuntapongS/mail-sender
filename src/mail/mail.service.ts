import { IMail } from "./mail";

export interface IMailService {
  sendMail: (mail: IMail) => Promise<void>;
}

export const mailService = (): IMailService => {
  const sendMail = async (mail: IMail) => {
    console.log(mail);
  };
  return { sendMail };
};
