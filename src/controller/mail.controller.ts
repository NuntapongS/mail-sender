import { IMail } from "../model/mail";

class MailController {
  sendMail = async (req: any, res: any) => {
    const mail: IMail = req.body;
    console.log(mail);
    res.status(200).send("Thank you for getting in touch! ");
  };
}

export default MailController;
