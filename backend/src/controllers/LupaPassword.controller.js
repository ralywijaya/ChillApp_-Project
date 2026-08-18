const prisma = require('../config/prisma.config');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/sendEmail');

const LupaPassword = async (req, res) => {
  try {
    const body = req.body;

    const AmbilEmail = await prisma.users.findUnique({ where: { user_email: body.user_email } });
    if (!AmbilEmail) {
      return res.status(200).json({ message: 'user_email tidak ditemukan' });
    }

    const token = jwt.sign(
      {
        id_user: AmbilEmail.id_user,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '15m',
      },
    );
    await sendEmail(
      AmbilEmail.user_email,

      'Ganti password',

      `hallo ${AmbilEmail.user_email} jika kamu ingin ganti paswword gunakan token diatas di http://127.0.0.1:3000/ganti/password ini adalah url yang akan digunkan di insomnia atau postman tambahkan {
    token:${token},
    user_password:password baru kamu`,
    );

    return res.status(200).json({ message: 'akun berhasil ditemukan tolong buka email anda' });
  } catch (error) {
    res.status(500).json({ message: 'database eror', error: error.message });
  }
};

module.exports = { LupaPassword };
