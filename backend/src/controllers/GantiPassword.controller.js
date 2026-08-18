const prisma = require('../config/prisma.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sendEmail = require('../utils/sendEmail');
const GantiPassword = async (req, res) => {
  try {
    const body = req.body;
    const tokenVerify = jwt.verify(body.token, process.env.JWT_SECRET);
    const hashPassword = bcrypt.hashSync(body.user_password, 10);
    // console.log(hashPassword);
    const GantiPassword = await prisma.users.update({
      where: { id_user: tokenVerify.id_user },
      data: {
        user_password: hashPassword,
      },
    });
    if (!GantiPassword) {
      return res.status(200).json({ message: ' ganti Password gagal' });
    }

    await sendEmail(
      GantiPassword.user_email,

      'Ganti password',

      `hallo ${GantiPassword.user_email} password anda berhasil di perbarui`,
    );

    return res
      .status(200)
      .json({ message: 'password anda berhasil di ganti tolong buka email anda' });
  } catch (error) {
    res.status(500).json({ message: 'database eror', error: error });
  }
};

module.exports = { GantiPassword };
