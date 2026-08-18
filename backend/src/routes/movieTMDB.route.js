// movie.route.js

const express = require("express");
const router = express.Router();

const {
  getMoviePopuler,
  getMovieTerbaru,
  getMovieTopRating,getVideoMovie,getMovieGenre,getDetailMovie,getMovieID,getMovieSimiliar,getSearchTMDB,getGenreIDMovie,getTrandingAllDay
} = require("../controllers/movieTMDB.controller");

router.get("/similar/:id", getMovieSimiliar);
router.get("/populer", getMoviePopuler);
router.get("/terbaru", getMovieTerbaru);
router.get("/top-rating", getMovieTopRating);
router.get("/video/:id", getVideoMovie);
router.get("/genre", getMovieGenre);
router.get("/detail/:id", getDetailMovie);
router.get("/id/:id", getMovieID);
router.get("/search", getSearchTMDB);
router.get("/genre/movie", getGenreIDMovie);
router.get("/tranding/day", getTrandingAllDay);
module.exports = router;