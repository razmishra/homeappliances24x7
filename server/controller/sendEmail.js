const express = require("express");
const validator = require("validator");
const nodemailer = require("nodemailer");
const fs = require("fs");
const containsSpecialCharsOrNumbers = require("../modules/stringValidation");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendEmail = (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name) {
    return res.status(403).json({ message: "Please enter your name" });
  }

  if (containsSpecialCharsOrNumbers(name).containsNumbers) {
    return res.status(403).json({ message: "Name should not contain numbers" });
  }

  if (containsSpecialCharsOrNumbers(name).containsSpecialChars) {
    return res
      .status(403)
      .json({ message: "Name should not contain special characters" });
  }

  if (email) {
    if (!validator.isEmail(email)) {
      return res
        .status(403)
        .json({ message: "Please enter a valid email address" });
    }
  }

  if (phone.toString().length !== 10) {
    res
      .status(403)
      .json({ message: "Please enter a valid 10 digit phone number" });
  }

  if (containsSpecialCharsOrNumbers(phone).containsSpecialChars) {
    return res
      .status(403)
      .json({ message: "Phone number should not contain special characters" });
  }
  const emailTemplate = fs.readFileSync(
    "./mailTemplate/mailTemplate.html",
    "utf-8"
  );

  const emailContent = emailTemplate
    .replace(/{name}/g, name)
    .replace(/{email}/g, email)
    .replace(/{phone}/g, phone)
    .replace(/{message}/g, message)

  const mailOptions = {
    from: process.env.EMAIL,
    to: "homeappliences24x7@gmail.com",
    subject: "One inquiry received",
    html: emailContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.json({ message: error });
    } else {
      return res.json({ message: "send successfully" });
    }
  });
};

module.exports = sendEmail;
