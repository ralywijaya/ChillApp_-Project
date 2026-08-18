const express = require("express");
const router = express.Router();

const {
  getSerialPopuler,
  getSerialTerbaru,
  getSerialTopRating,getVideoSerial,getSerialGenre,getSerialID,getSerialSimiliar,getDetailSerial,getGenreIDSerial
} = require("../controllers/serial.TMDB.controller");

router.get("/similar/:id", getSerialSimiliar);
router.get("/populer", getSerialPopuler);
router.get("/terbaru", getSerialTerbaru);
router.get("/top-rating", getSerialTopRating);
router.get("/video/:id", getVideoSerial);
router.get("/genre", getSerialGenre);

router.get("/kategoryumur/:id", getDetailSerial);
router.get("/genre/serial", getGenreIDSerial);

router.get("/id/:id", getSerialID);
module.exports = router;