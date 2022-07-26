const nodemailer = require("nodemailer");

//* Create email configuration
const sendEmail = (emailReceived, emailContent, emailSubject) => {
    //* Create smtpTransport
    const smtpTransport = nodemailer.createTransport({
      service: process.env.SERVICE,
      secure: true,
      port: process.env.SERVICE_PORT,
      auth: {
        user: process.env.EMAIL, //* email test on .env file just use email name (don't use @xxxx.com)
        pass: process.env.PASSWORD, //* password generated by google to external apps
      },
    });
    // console.log(smtpTransport);
  
    //* Create mail options
    const mailOptions = {
      from: process.env.EMAIL, //* same email from test
      to: emailReceived, //* email that we received from emailReceived
      subject: emailSubject,
      text: emailContent,
    };
    // console.log(mailOptions);
  
    //* Create the email transport
    smtpTransport.sendMail(mailOptions, (error, response) => {
      if (error) {
        console.log(error);
        return error;
      } else {
        console.log("Notification: Email Sent!");
        return response;
      }
    });
    smtpTransport.close();
  };

module.exports = sendEmail;
