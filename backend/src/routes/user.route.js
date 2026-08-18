const express = require('express');
const router = express.Router();
const {Login}=require('../middlewares/AunthLogin.middleware') 

const {
  ambilUser,
  tambahUser,
  ubahUser,
  hapusUser,
  updateFotoProfil,TambahEmail,ubahPaket,ubahSandi
} = require('../controllers/user.controller');

router.get('/',ambilUser);
router.patch('/ubah_sandi',ubahSandi);
router.post('/', tambahUser);
router.patch('/',Login, ubahUser);
router.delete('/',Login, hapusUser);
router.patch('/upload/:id',Login,updateFotoProfil);
router.patch('/upload_email',Login, TambahEmail)
router.patch('/upload_paket',Login, ubahPaket

);
module.exports = router;
