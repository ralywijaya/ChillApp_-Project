const tmdb = require("../config/tmdb.config");


// =========================
// SERIAL POPULER
// =========================
const getSerialPopuler = async (req, res) => {
  try {
    const response = await tmdb.get("/tv/popular");

    res.json({
      results: response.data.results.map((item) => ({
        ...item,
        media_type: "tv",
      })),
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =========================
// SERIAL TERBARU
// =========================
const getSerialTerbaru = async (req, res) => {
  try {
    const response = await tmdb.get("/tv/airing_today");

    res.json({
      results: response.data.results.map((item) => ({
        ...item,
        media_type: "tv",
      })),
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =========================
// SERIAL TOP RATING
// =========================
const getSerialTopRating = async (req, res) => {
  try {
    const response = await tmdb.get("/tv/top_rated");

    res.json({
      results: response.data.results.map((item) => ({
        ...item,
        media_type: "tv",
      })),
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =========================
// GENRE SERIAL
// =========================
const getSerialGenre = async (req, res) => {
  try {
    const response = await tmdb.get("/genre/tv/list");

    res.json({
      results: response.data.genres,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =========================
// DETAIL SERIAL / RATING UMUR
// =========================
const getDetailSerial = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const response = await tmdb.get(
      `/tv/${id}/content_ratings`
    );

    const ratingUmur = response.data.results.find(
      (item) => item.iso_3166_1 === "US"
    );

    const certification =
      ratingUmur?.rating || "Not Rated";

    res.json({
      certification,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =========================
// VIDEO SERIAL
// =========================
const getVideoSerial = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const response = await tmdb.get(
      `/tv/${id}/videos`
    );

    res.json({
      results: response.data.results,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =========================
// DETAIL SERIAL
// =========================
const getSerialID = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const response = await tmdb.get(
      `/tv/${id}`
    );

    res.json({
      results: {
        ...response.data,
        media_type: "tv",
      },
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =========================
// SERIAL SIMILAR
// =========================
const getSerialSimiliar = async (req, res) => {
  const id = Number(req.params.id);

  try {
    const response = await tmdb.get(
      `/tv/${id}/similar`
    );

    res.json({
      results: response.data.results.map((item) => ({
        ...item,
        media_type: "tv",
      })),
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// =========================
// SERIAL BERDASARKAN GENRE
// =========================
const getGenreIDSerial = async (req, res) => {
  const genreID = Number(req.query.with_genres);

  if (!genreID) {
    return res.status(200).json({
      message: "data tidak ada",
    });
  }

  try {
    const response = await tmdb.get(
      `/discover/tv?with_genres=${genreID}`
    );

    res.json({
      results: response.data.results.map((item) => ({
        ...item,
        media_type: "tv",
      })),
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  getSerialPopuler,
  getSerialTerbaru,
  getSerialTopRating,
  getSerialGenre,
  getVideoSerial,
  getSerialID,
  getSerialSimiliar,
  getDetailSerial,
  getGenreIDSerial,
};