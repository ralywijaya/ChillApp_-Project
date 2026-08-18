const prisma = require('../config/prisma.config');
const bcrypt = require('bcrypt');
const sendEmail = require('../utils/sendEmail');
const { OAuth2Client } = require("google-auth-library");
require('dotenv').config();
const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);
const ambilUser = async (req, res) => {
  try {
    const getUser = await prisma.users.findMany();

    if (!getUser) {
      return res.status(400).json({ massage: 'ambil users gagal' });
    }
    return res.status(200).json({ data: getUser });
  } catch (error) {
    return res.status(500).json({
      message: 'Gagal mengambil database user ',
      error: error.message,
    });
  }
};

const tambahUser = async (req, res) => {
  try {
    const body = req.body;
    const password = body.user_password;
    if (!body.user_password) {
      return res.status(400).json({
        message: 'Password wajib diisi',
      });
    }

    const hash = bcrypt.hashSync(password, 10);
  if (!/[A-Z]/.test(body.user_nama)) {
      return res.status(400).json({ message: 'User nama harus ada huruf besar' });
    }


if (!/[0-9]/.test(body.user_nama)) {
     return res.status(400).json({ message: 'user nama harus berisi angka' });
    }
    


    if (!/[A-Z]/.test(body.user_password)) {
      return res.status(400).json({ message: 'User password harus ada huruf besar' });
    }


if (!/[0-9]/.test(body.user_password)) {
     return res.status(400).json({ message: 'user password harus berisi angka' });
    }
const postUser = await prisma.users.create({ data: { ...body, user_password: hash } });

if (!postUser) {
      return res.status(400).json({ message: 'post user gagal' });
    }
// console.log(postUser)
  if (postUser.user_email) {
  await sendEmail(
    postUser.user_email,
    "Register Berhasil",
    `Halo ${postUser.user_nama}, akun kamu berhasil dibuat.`,
  );
}
    return res.status(200).json({ message: 'post user berhasil', data: postUser });
  }
   catch (error) {
    return res.status(500).json({
      message: 'Gagal mengubah database user',
      error: error.message,
    });
  }
};

const ubahUser = async (req, res) => {
  const { user_nama } = req.user; // Ambil username lama dari token

  try {
    const body = req.body;
    
    // 1. Siapkan objek penampung untuk data yang mau diubah
    // const updateData = {};

    // // 2. Cek satu per satu, apakah frontend mengirim datanya?
    // if (body.user_nama) {
    //   updateData.user_nama = body.user_nama;
    // }
    
    // if (body.user_email) {
    //   updateData.user_email = body.user_email;
    // }

    // // Hanya jika user ingin ganti password (mengirim user_password), baru kita hash
    // if (body.user_password) {
    //   updateData.user_password = bcrypt.hashSync(body.user_password, 10);
    // }

    // // 3. Pastikan ada data yang dikirim sebelum memanggil database
    // if (Object.keys(updateData).length === 0) {
    //   return res.status(400).json({ message: 'Tidak ada data yang dikirim untuk diubah' });
    // }

    //  if (!body.user_password) {
    //   return res.status(400).json({
    //     message: 'Password wajib diisi',
    //   });
    // }
 if (!body.user_nama||body.user_nama==="") {
      return res.status(400).json({ message: 'User nama harus disi' });
    }


      if (!/[A-Z]/.test(body.user_nama)) {
      return res.status(400).json({ message: 'User nama harus ada huruf besar' });
    }


if (!/[0-9]/.test(body.user_nama)) {
     return res.status(400).json({ message: 'user nama harus berisi angka' });
    }
    


 

    // 4. Lakukan update ke database menggunakan Prisma
    const updateUser = await prisma.users.update({
      where: { user_nama: user_nama }, // Cari user berdasarkan nama di token
      data: {
        user_nama:body.user_nama,
        user_password:body.user_password,
        user_email:body.user_email
      }, // Prisma HANYA akan mengupdate kolom yang ada di dalam updateData
    });

    if (!updateUser) {
      return res.status(400).json({ message: 'Update user gagal' });
    }

    return res.status(200).json({ message: 'Update user berhasil', data: updateUser });

  } catch (error) {
    // Tangani error jika user_nama / user_email baru ternyata sudah dipakai orang lain
    if (error.code === 'P2002') {
      return res.status(400).json({ message: 'Username atau Email sudah digunakan' });
    }

    return res.status(500).json({
      message: 'Gagal Update database user',
      error: error.message,
    });
  }
};

const hapusUser = async (req, res) => {
  try {
    const {user_nama} =req.user

    const deleteUser = await prisma.users.delete({ where: { user_nama: user_nama} });
    if (!deleteUser) {
      return res.status(400).json({ massage: 'hapus user gagal' });
    }

    return res.status(200).json({ massage: 'hapus user berhasil' });
  } catch (error) {
    return res.status(500).json({
      message: 'Gagal hapus database user',
      error: error.message,
    });
  }
};




const updateFotoProfil = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const{foto_profil}=req.body
   



   

  if (!foto_profil) {
      return res.status(400).json({
        message: "URL foto tidak ada",
      });
    }

    

    const user = await prisma.users.update({
      where: {
        id_user: id,
      },

      data: {
        foto_profil: foto_profil,
      },
    });

    return res.json({
      message: 'Foto berhasil diupload',
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      Eror:"gagal upload file"
    });
  }
};







const TambahEmail= async (req, res) => {
const {user_id}=req.user
    const { token } = req.body;
// console.log("REQ USER:", req.user);
    // console.log("REQ BODY:", req.body);
  try {
    
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

} = payload;

// console.log("EMAIL YANG AKAN DISIMPAN:", email);
    // Cari user berdasarkan email
   const emailSudahAda = await prisma.users.findFirst({
      where: {
        user_email: email,
        NOT: {
          id_user: user_id,
        },
      },
    });

    if (emailSudahAda) {
      return res.status(409).json({
        message: "Email Google sudah digunakan oleh akun lain",
      });
    }

    // Tambahkan email Google ke akun yang sedang login
    const user = await prisma.users.update({
      where: {
        id_user: user_id,
      },
      data: {
        user_email: email,
      },
    });
  
// console.log("EMAIL YANG AKAN DISIMPAN:", email);
    // Kalau belum ada, buat user
    

     await sendEmail(
      email,
      "Login berhasil",
      `Halo ${name},

Kamu berhasil login menggunakan akun Google.

Email: ${email}

Selamat datang di aplikasi kami.`
    );

    // Buat JWT milik aplikasi kamu
  

    return res.status(200).json({
      message: "Google login berhasil",
    
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



const ubahPaket = async (req, res) => {
 ; // Ambil username lama dari token

  try {

    const {user_paket} = req.body;
     const { user_id } = req.user
    // 1. Siapkan objek penampung untuk data yang mau diubah
    

    // 3. Pastikan ada data yang dikirim sebelum memanggil database
    

    // 4. Lakukan update ke database menggunakan Prisma
    const user = await prisma.users.update({
      where: { id_user: user_id }, // Cari user berdasarkan nama di token
      data: {
       paket:user_paket
      }, // Prisma HANYA akan mengupdate kolom yang ada di dalam updateData
    });

    if (!user) {
      return res.status(400).json({ message: 'Update user gagal' });
    }

    return res.status(200).json({ data: user.paket });

  } catch (error) {
    // Tangani error jika user_nama / user_email baru ternyata sudah dipakai orang lain
    

    return res.status(500).json({
      message: 'Gagal Update database user',
      error: error.message,
    });
  }
};

const ubahSandi = async (req, res) => {
 ; // Ambil username lama dari token

  try {

    const {identitas,password} = req.body;
   

    if(!password){
        return res.status(400).json({ massage: 'tolong masukan Password' })
    }
       if (!/[A-Z]/.test(password)) {
      return res.status(400).json({ massage: 'User password harus ada huruf besar' });
    }


if (!/[0-9]/.test(password)) {
     return res.status(400).json({ massage: 'user password harus berisi angka' });
    }
    // 1. Siapkan objek penampung untuk data yang mau diubah
    

    // 3. Pastikan ada data yang dikirim sebelum memanggil database
    if(!identitas){
       return res.status(400).json({ message: 'Masukan User Nama atau email anda' })
    }

    const userIdentitas = await prisma.users.findFirst({
  where: {
    OR: [
      {
        user_nama: identitas
      },
      {
        user_email: identitas
      }
    ]
  }
});

 if (!userIdentitas) {
      return res.status(400).json({ message: 'User Tidak ada' });
    }


const hash = bcrypt.hashSync(password, 10);


    // 4. Lakukan update ke database menggunakan Prisma
    const user = await prisma.users.update({
      where: { user_nama: userIdentitas.user_nama }, // Cari user berdasarkan nama di token
      data: {
       user_password:hash
      }, // Prisma HANYA akan mengupdate kolom yang ada di dalam updateData
    });

    if (!user) {
      return res.status(400).json({ message: 'gagal update password' });
    }

    return res.status(200).json({ data: user.user_password });

  } catch (error) {
    // Tangani error jika user_nama / user_email baru ternyata sudah dipakai orang lain
    

    return res.status(500).json({
      message: 'Gagal Update database user',
      error: error.message,
    });
  }
};




module.exports = { ambilUser, tambahUser, ubahUser, hapusUser, updateFotoProfil ,TambahEmail,ubahPaket,ubahSandi};
