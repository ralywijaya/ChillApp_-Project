const transporter = require("../config/nodemiler.config");
require("dotenv").config();

const sendEmail = async (email, subject, message) => {
  try {
    const info = await transporter.sendMail({
      from: `"App Test" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: subject,
      text: message,
    });

    // console.log("Email berhasil dikirim");
    // console.log("Message ID:", info.messageId);
    return info;
  } catch (error) {
    console.error("Gagal mengirim email:", error);
    throw error;
  } 
};


module.exports = sendEmail;
