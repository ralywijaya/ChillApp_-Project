
const sendEmail=require('../utils/sendEmail')
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma.config");

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

const GoogleLogin = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({
        message: "Google token tidak ditemukan",
      });
    }

    // Verifikasi token dari Google
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

   const {
 
  email,
  name,
  picture,
} = payload;
    // Cari user berdasarkan email
    let user = await prisma.users.findUnique({
      where: {
        user_email: email,
      },
    });

    // Kalau belum ada, buat user
    if (!user) {
      user = await prisma.users.create({
        data: {
          user_email: email,
    user_nama: name,
    foto_profil: picture,
        
       
        },
      });
    }

 try {
  await sendEmail(
    email,
    "Login berhasil",
    `Halo ${name},

Kamu berhasil login menggunakan akun Google.

Email: ${email}

Selamat datang di aplikasi kami.`
  );
} catch (emailError) {
  console.error("Email notifikasi gagal dikirim:", emailError.message);
}

    // Buat JWT milik aplikasi kamu
    const jwtToken = jwt.sign(
      {
        user_id: user.id_user,
        user_email: user.user_email,
        user_nama: user.user_nama,
        paket:user.paket,
foto_profil:user.foto_profil
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    return res.status(200).json({
      message: "Google login berhasil",
      token: jwtToken,
      user: {
       user_id: user.id_user,
        user_email: user.user_email,
        user_nama: user.user_nama,
foto_profil:user.foto_profil
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Google login gagal",
      error: error.message,
    });
  }
};

module.exports = {GoogleLogin};