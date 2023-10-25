const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 5000;
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  const formData = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // Outlook SMTP server
    port: 587, // Standard port for TLS
    secure: false, // true for 465, false for other ports
    auth: {
      user: "womenscafe@gmail.com",
      pass: "Quantum01101",
    },
  });

  // Email data
  const mailOptions = {
    from: "womenscafe@gmail.com",
    to: formData.email,
    subject: "New Contact Form Submission",
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.number}      
      Message: ${formData.message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ message: "An error occurred while sending the email" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
