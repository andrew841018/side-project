const mailer = require("nodemailer");
const sendEmail = async (options) => {
  //1)create transporter
  const transporter = mailer.createTransport({
    port: process.env.EMAIL_PORT,
    host: process.env.EMAIL_HOST,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  //下面是資訊，但不真正代表寄送者/收件者
  //2)Define the email options
  const mailOptions = {
    from: "test123@gmail.com",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  //3) Actually send email
  await transporter.sendMail(mailOptions);
};
module.exports = sendEmail;
