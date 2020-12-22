var nodemailer = require("nodemailer");
var xoauth2 = require('xoauth2');
var smtp = require('nodemailer-smtp-transport');

const sendEmail = async (options) => {

    
  var smtpTransport = nodemailer.createTransport(smtp({
    service: "Gmail",
    auth: {
      xoauth2: xoauth2.createXOAuth2Generator({
      user: `${process.env.from_email}`,
      pass: `${process.env.password}`
      // to do encrpty gmail and password
       })
    
         }
    }));

  const message = {
    from: `ShopLab`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: `<a href=${options.url}><button>Click Here</button></a>`,
  };
  smtpTransport.sendMail(message)
};
module.exports = sendEmail;
