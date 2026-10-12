const { onRequest } = require("firebase-functions/v2/https");
const nodemailer = require("nodemailer");
require("dotenv").config();

// กำหนดค่า SMTP สำหรับ Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// ฟังก์ชันสำหรับส่งอีเมล
exports.sendEmail = onRequest(async (req, res) => {
  try {
    const { firstName, lastName, email, phone, topic, message } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form Submission - ${topic}`,
      html: `
        <h3>New Message from Contact Form</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send({
      status: "OK",
      message: ["Email sent successfully!"],
      data: [],
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send({status: "OK", message: ["Failed to send email."]} );
  }
});
