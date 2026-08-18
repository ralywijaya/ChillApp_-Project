const prisma = require('../config/prisma.config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const AunthLogin = async (req, res) => {
  const body = req.body;
  const user = await prisma.users.findFirst({
    where: {
      OR: [
        {
          user_email: body.user_email,
        },
        {
          user_nama: body.user_nama,
          
        },
      ],
    },
  });

  
  if (!user) {
  return  res.status(400).json({ message: 'user tidak ditemukan' });
  }

  const hash = bcrypt.compareSync(body.user_password, user.user_password);

  if (!hash) {
  return  res.status(400).json({ message: 'password user salah' });
  }

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

  return res.status(200).json({ message: 'login berhasil', token: jwtToken });
};

module.exports = { AunthLogin };
