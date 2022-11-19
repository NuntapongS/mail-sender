import { Imail } from "../model/mail";

class MailController {
  sendMail = async (req: any, res: any) => {
    const mail: Imail = req.body;
    console.log(mail);
    res.status(200).send("Thank you for getting in touch! ");
  };
}

export default MailController;
