import nodemailer from "nodemailer";
import { config } from "dotenv";
config();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendMessageEmail(to, username) {
  await transporter.sendMail({
    from: `Your student <${process.env.EMAIL_USER}> from N7 full stack course`,
    to,
    subject: "Few questions from your student",
    html: `<h1>Asalom alekum Ustoz, sizga email jonatdim aytkaningizdek</h1>
        <p>Keyingi darsda qaysi mavzu otiladi, osha mavzuga research qilib kelardim</p>`,
  });
}

export { sendMessageEmail };
