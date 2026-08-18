const express = require("express");

const router = express.Router();

const { Login } = require("../middlewares/AunthLogin.middleware");

const {
  tambahDaftar,
  hapusDaftar,getDaftarSaya,getDaftarSayaTMDB
} = require("../controllers/DaftarSaya.controller");


router.post("/", Login, tambahDaftar);

router.delete("/", Login, hapusDaftar);
router.get("/", Login, getDaftarSaya)
router.get("/TMDB", Login, getDaftarSayaTMDB)


module.exports = router;