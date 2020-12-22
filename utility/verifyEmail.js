var nodemailer = require("nodemailer");
var xoauth2 = require('xoauth2');
var smtp = require('nodemailer-smtp-transport');
const verifyEmail = async (options) => {
  
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

  const mailOptions = {
    from: `ShopLap`,
    to: options.email,
    subject: options.subject,
    html:
      "<div style =" +
      "width:100%; height:100%;  " +
      "><h1 style=" +
      "font-weight:500>Hey, " +
      options.name +
      "<br>Welcome to ShopPonit</h1><h1>Thanks for Signing up on our app</h1><h3>Your Code for verification is : " +
      options.code +
      " </h3></div><p>If this request is not made by you kindly ignore this mail.</p><p>Regards, <strong>Sajid Ansari(Owner)</strong></p>",
  };

  smtpTransport.sendMail(mailOptions)

};
module.exports = verifyEmail;
